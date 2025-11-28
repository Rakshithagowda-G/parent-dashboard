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
import { styled } from "@mui/material/styles";
import rgba from "assets/theme/functions/rgba";

export default styled("div")(({ theme, ownerState }) => {
  const { palette, functions, borders } = theme;
  const { error, success, disabled } = ownerState;
  const isDarkMode = palette.mode === 'dark';

  const { inputColors, grey, white } = palette;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  // Dark navy blue color for dark mode
  const darkNavyBlue = "#0f123b";

  // border color value
  let borderColorValue = inputColors.borderColor.main;

  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }

  return {
    display: "flex",
    alignItems: "center",
    backgroundColor: isDarkMode 
      ? `${darkNavyBlue} !important`
      : (disabled ? grey[200] : white.main),
    backdropFilter: isDarkMode ? "none" : undefined,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.md,
    borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : borderColorValue,
    overflow: "hidden",

    "& .MuiInputBase-input": {
      height: pxToRem(20),
      backgroundColor: isDarkMode ? "transparent !important" : undefined,
    },
    
    // Ensure child elements also have transparent background to show parent navy blue
    "& > *": {
      backgroundColor: isDarkMode ? "transparent !important" : undefined,
    },
    
    // Force navy blue on all nested elements
    "& *": {
      backgroundColor: isDarkMode ? "transparent !important" : undefined,
    },
  };
});
