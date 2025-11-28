/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import darkColors from "assets/theme/base/darkColors";
import borders from "assets/theme/base/borders";

// Soft UI Dashboard React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

const { white } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: ({ theme }) => {
      const isDarkMode = theme.palette.mode === 'dark';
      const currentColors = isDarkMode ? darkColors : colors;
      const { gradients } = currentColors;
      
      return {
        width: pxToRem(250),
        whiteSpace: "nowrap",
        border: "none",
      };
    },

    paper: ({ theme }) => {
      const isDarkMode = theme.palette.mode === 'dark';
      const currentColors = isDarkMode ? darkColors : colors;
      const { gradients } = currentColors;
      
      return {
        width: pxToRem(250),
        backgroundColor: isDarkMode 
          ? undefined 
          : rgba(white.main, 0.8),
        background: isDarkMode 
          ? linearGradient(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg)
          : undefined,
        backdropFilter: isDarkMode 
          ? "blur(120px)" 
          : `saturate(200%) blur(${pxToRem(30)})`,
        height: `calc(100vh - ${pxToRem(32)})`,
        margin: pxToRem(16),
        borderRadius: borderRadius.xl,
        border: "none",
        // Hide scrollbar but keep scrolling functionality
        "&::-webkit-scrollbar": {
          display: "none",
          width: 0,
        },
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        overflowY: "auto",
      };
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
