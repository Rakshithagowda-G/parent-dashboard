/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import linearGradient from "assets/theme/functions/linearGradient";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, miniSidenav } = ownerState;

  const sidebarWidth = 250;
  const sidebarWidthTablet = 200;
  const sidebarWidthMobile = 280;
  const { white, transparent, background, grey, gradients } = palette;
  const { xxl } = boxShadows;
  const { pxToRem } = functions;
  const isDarkMode = palette.mode === 'dark';

  // Determine sidebar background based on theme mode
  const sidebarBg = isDarkMode 
    ? (transparentSidenav 
        ? transparent.main 
        : linearGradient(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg))
    : (transparentSidenav ? transparent.main : white.main);

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      backgroundColor: !isDarkMode && transparentSidenav ? transparent.main : undefined,
      background: isDarkMode && !transparentSidenav ? sidebarBg : (!isDarkMode ? sidebarBg : undefined),
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color", "background"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
    [breakpoints.between("md", "xl")]: {
      width: miniSidenav ? pxToRem(96) : sidebarWidthTablet,
      transition: transitions.create(["width"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
    [breakpoints.down("md")]: {
      width: sidebarWidthMobile,
      transform: miniSidenav ? `translateX(${pxToRem(-320)})` : "translateX(0)",
      transition: transitions.create(["transform"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      backgroundColor: !isDarkMode && transparentSidenav ? transparent.main : undefined,
      background: isDarkMode && !transparentSidenav ? sidebarBg : (!isDarkMode ? sidebarBg : undefined),
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color", "background"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
    [breakpoints.between("md", "xl")]: {
      width: pxToRem(96),
      transition: transitions.create(["width"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
    [breakpoints.down("md")]: {
      width: sidebarWidthMobile,
      transform: `translateX(${pxToRem(-320)})`,
      transition: transitions.create(["transform"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      backdropFilter: isDarkMode && !transparentSidenav ? "blur(120px)" : undefined,
      // Hide scrollbar but keep scrolling functionality
      "&::-webkit-scrollbar": {
        display: "none",
        width: 0,
      },
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE and Edge
      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
