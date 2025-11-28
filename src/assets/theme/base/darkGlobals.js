/**
=========================================================
* Soft UI Dashboard React - Dark Theme Globals
=========================================================

* Dark theme global styles
*/

// Soft UI Dashboard React Base Styles
import darkColors from "assets/theme/base/darkColors";

const { info, grey } = darkColors;

const darkGlobals = {
  html: {
    scrollBehavior: "smooth",
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
  body: {
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
  "#root": {
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${grey[700]} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};

export default darkGlobals;
