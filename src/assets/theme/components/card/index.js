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

// Soft UI Dashboard React Base Styles
import colors from "assets/theme/base/colors";
import darkColors from "assets/theme/base/darkColors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard React Helper Functions
import rgba from "assets/theme/functions/rgba";
import linearGradient from "assets/theme/functions/linearGradient";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

const card = {
  styleOverrides: {
    root: ({ theme }) => {
      const isDarkMode = theme.palette.mode === 'dark';
      const currentColors = isDarkMode ? darkColors : colors;
      const { gradients } = currentColors;
      
      return {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: isDarkMode ? undefined : white.main,
        background: isDarkMode && gradients.card 
          ? linearGradient(gradients.card.main, gradients.card.state, gradients.card.deg)
          : undefined,
        backdropFilter: isDarkMode ? "blur(120px)" : undefined,
        backgroundClip: "border-box",
        border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
        borderRadius: borderRadius.xl,
        boxShadow: xxl,
        padding: isDarkMode ? "22px" : undefined,
      };
    },
  },
};

export default card;
