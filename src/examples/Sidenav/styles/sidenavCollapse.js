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
function collapseItem(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav } = ownerState;
  const isDarkMode = palette.mode === 'dark';

  const { dark, white, text, transparent, sidenav } = palette;
  const { xxl } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    background: isDarkMode 
      ? (active ? sidenav.button : transparent.main)
      : (active && transparentSidenav ? white.main : transparent.main),
    color: isDarkMode ? white.main : (active ? dark.main : text.main),
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(10.8)} ${pxToRem(12.8)} ${pxToRem(10.8)} ${pxToRem(16)}`,
    margin: `0 ${pxToRem(16)}`,
    borderRadius: borderRadius.lg,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: active && transparentSidenav && !isDarkMode ? xxl : "none",
    [breakpoints.up("xl")]: {
      boxShadow: () => {
        if (active && !isDarkMode) {
          return transparentSidenav ? xxl : "none";
        }
        return "none";
      },
      transition: transitions.create("box-shadow", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },
  };
}

function collapseIconBox(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, color } = ownerState;
  const isDarkMode = palette.mode === 'dark';

  const { white, info, light, gradients, transparent, sidenav } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  if (isDarkMode) {
    return {
      background: active 
        ? (color === "default" ? info.main : palette[color]?.main || info.main)
        : sidenav.button,
      minWidth: pxToRem(32),
      minHeight: pxToRem(32),
      borderRadius: borderRadius.button || borderRadius.md,
      display: "grid",
      placeItems: "center",
      boxShadow: md,
      transition: transitions.create("margin", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),

      [breakpoints.up("xl")]: {
        background: () => {
          if (!active) {
            return sidenav.button;
          } else if (color === "default") {
            return info.main;
          } else if (color === "warning") {
            return gradients.warning.main;
          } else {
            return palette[color]?.main || info.main;
          }
        },
      },

      "& svg, svg g": {
        fill: white.main,
      },
    };
  }

  // Light mode (unchanged)
  return {
    background: () => {
      if (active) {
        return color === "default" ? info.main : palette[color].main;
      }
      return light.main;
    },
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    boxShadow: md,
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up("xl")]: {
      background: () => {
        let background;

        if (!active) {
          background = transparentSidenav ? white.main : light.main;
        } else if (color === "default") {
          background = info.main;
        } else if (color === "warning") {
          background = gradients.warning.main;
        } else {
          background = palette[color].main;
        }

        return background;
      },
    },

    "& svg, svg g": {
      fill: active ? white.main : gradients.dark.state,
    },
  };
}

const collapseIcon = (theme, { active }) => {
  const { palette: { white, gradients, mode } } = theme;
  const isDarkMode = mode === 'dark';
  return {
    color: isDarkMode ? white.main : (active ? white.main : gradients.dark.state),
  };
};

function collapseText(theme, ownerState) {
  const { typography, transitions, breakpoints, functions, palette } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;
  const isDarkMode = palette.mode === 'dark';

  const { size, fontWeightMedium, fontWeightRegular } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(12.8),
    color: isDarkMode ? palette.white.main : undefined,

    [breakpoints.up("xl")]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(12.8),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightMedium : fontWeightRegular,
      fontSize: size.sm,
      lineHeight: 0,
      color: isDarkMode ? palette.white.main : undefined,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
