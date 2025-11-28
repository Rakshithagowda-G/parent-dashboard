import { useEffect, useRef } from "react";
import SoftBox from "components/SoftBox";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useSoftUIController, setLayout } from "context";


function Attendance() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const iframeRef = useRef(null);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname, dispatch]);

  useEffect(() => {
    // Add dark mode class to body for iframe detection
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Also try to communicate with iframe via postMessage
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.onload = () => {
        iframe.contentWindow.postMessage({ darkMode: isDarkMode }, '*');
      };
      // Send message after a delay to ensure iframe is loaded
      setTimeout(() => {
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage({ darkMode: isDarkMode }, '*');
        }
      }, 1000);
    }

    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [isDarkMode]);

  return (
    <SoftBox
      className="attendance-card"
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",
        bgColor: "transparent",
        backgroundColor: "transparent",
        background: "transparent",
        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      <DashboardNavbar />
      <SoftBox
        py={0}
        sx={{
          bgColor: "transparent",
          backgroundColor: "transparent",
          background: "transparent",
        }}
      >
        <iframe
          ref={iframeRef}
          title="Attendance Dashboard"
          src="/attendance/index.html"
          style={{
            width: "100%",
            minHeight: "80vh",
            border: "none",
            backgroundColor: "transparent",
            display: "block",
          }}
        />
      </SoftBox>
    </SoftBox>
  );
}

export default Attendance;

