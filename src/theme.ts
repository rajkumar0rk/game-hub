import type { Shadows } from "@mui/material/styles";
import type { Palette } from "@mui/material/styles";
import type { Breakpoints, ThemeOptions } from "@mui/material/styles";
import { isSafari } from "react-device-detect";

const breakpoints: Partial<Breakpoints> = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1500 },
};

const typography = {
  htmlFontSize: 16,
  fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1,
    letterSpacing: "-0.66px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "2.25rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "2.55rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "2.7rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "3rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "3.15rem",
    },
  },
  h2: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1,
    letterSpacing: "-0.5px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "1.875rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "2.125rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "2.25rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2.5rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2.625rem",
    },
  },
  h3: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.02,
    letterSpacing: "0px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "1.5rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "1.7rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "1.8rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2.1rem",
    },
  },
  h4: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.15,
    letterSpacing: "0.07px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "1.3125rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "1.4875rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "1.575rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.75rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.8375rem",
    },
  },
  h5: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.33,
    letterSpacing: "0px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "1.125rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "1.275rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "1.35rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.5rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.575rem",
    },
  },
  h6: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.6,
    letterSpacing: "0.07px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "0.9375rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "1.0625rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "1.125rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.25rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.3125rem",
    },
  },

  subtitle1: {
    fontFamily: '"phrase_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.75,
    letterSpacing: "0.09px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "0.9375rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "1.09375rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "1.25rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.40625rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.5625rem",
    },
  },
  subtitle2: {
    fontFamily: '"phrase_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 700,
    lineHeight: 1.57,
    letterSpacing: "0.07px",
    [`@media only screen and (min-width:${breakpoints.values.xs}px) and (max-width:${breakpoints.values.sm}px)`]: {
      fontSize: "0.625rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]: {
      fontSize: "0.78125rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]: {
      fontSize: "0.9375rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.09375rem",
    },
    [`@media only screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.25rem",
    },
  },
  body1: {
    fontFamily: '"paragraph_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 399 : 600,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.09px",
  },
  body2: {
    fontFamily: '"paragraph_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 399 : 600,
    lineHeight: 1.43,
    letterSpacing: "0.1px",
    fontSize: "1rem",
  },
  body3: {
    fontFamily: '"paragraph_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 399 : 600,
    lineHeight: "2.125rem",
    letterSpacing: "0.1px",
    fontSize: "1rem",
  },
  button: {
    fontFamily: '"title_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 600 : 800,
    lineHeight: 1.69,
    letterSpacing: "0.3px",
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: '"paragraph_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 599 : 600,
    fontSize: "0.75rem",
    lineHeight: 1.58,
    letterSpacing: "0.3px",
  },
  overline: {
    fontFamily: '"paragraph_font", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: isSafari ? 499 : 500,
    fontSize: "0.75rem",
    lineHeight: 2.58,
    letterSpacing: "0.83px",
    textTransform: "uppercase",
  },
  glow_leds: {
    fontFamily: '"heading_font", "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: "0.83px",
    fontSize: "1.25rem",
    margin: "0",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "0",
    marginTop: "0",
    display: "flex",
    textShadow: isSafari ? "" : "0 0 1px #fff, 0 0 13px",
  },
};

const palette: Partial<Palette> = {
  common: { black: "#000", white: "#fff" },
  // type: "light",
  primary: {
    light: "#4c6ebf",
    main: "#4d5061",
    dark: "#474a59",
    contrastText: "#fff",
  },
  secondary: {
    light: "#63a4ff",
    main: "#6a6c80",
    dark: "#464754",
    contrastText: "#fff",
  },
  error: {
    light: "#BF334C",
    main: "#b00020",
    dark: "#7B0016",
    contrastText: "#fff",
  },
  warning: {
    light: "#ffc947",
    main: "#ff9800",
    dark: "#c66900",
    contrastText: "#fff",
  },
  info: {
    light: "#63a4ff",
    main: "#FFFFFF",
    dark: "#004ba0",
    contrastText: "#fff",
  },
  success: {
    light: "#5fab5e",
    main: "#2e7b32",
    dark: "#004e06",
    contrastText: "#fff",
  },
 
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

const shadows: Shadows = [
  "none",
  "0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
  "0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
  "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
  "0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2)",
  "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
  "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)",
  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
  "0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2)",
  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  "0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2)",
  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
  "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
  "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
];
const theme: ThemeOptions = {
  // breakpoints,
  // palette,
  // colorSchemes:{
  // dark:true,
  // light:true
  // },
  colorSchemes: {
    light: {
      palette: {
        ...palette,
        background: {
          default: '#f5f5f5',
          paper: '#f5f5f5',  // Body background (light)
        },
        AppBar:{
          defaultBg: '#f5f5f5',
          darkBg:"#f5f5f5"
        },
        text: {
          primary: "#212121",
          secondary: "#757575",
          disabled: "rgba(0, 0, 0, 0.38)",
        },
         action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  divider: "rgba(0, 0, 0, 0.12)",
        
      },

    },
    dark: {

      palette: {
        ...palette,
        background: {

          default: '#121212',  // Body background (dark)
          paper: "#121212"
        },
        AppBar:{
defaultBg:  '#121212 !important',
darkBg:"#121212 "
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#b2b2b2",
          // secondary_dark: "#333333",
          // secondary_light: "#b2b2b2",
          disabled: "rgba(0, 0, 0, 0.38)",
          // hint: "rgba(0, 0, 0, 0.38)",
        },
          action: {
    active: "rgba(255, 255, 255, 0.54)",
    hover: "rgba(255, 255, 255, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(255, 255, 255, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(255, 255, 255, 0.26)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  divider: "rgba(255, 255, 255, 0.12)",

      },
    },

  },
  // palette,
  direction: "ltr",
  mixins: {},
  // props: {},
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         WebkitFontSmoothing: "auto",
  //         boxSizing: "border-box",
  //       },
  //       body: {
  //         // backgroundColor: "#272727",
  //         color: "white",
  //         fontFamily: '"phrase_font", "Roboto", "Helvetica", "Arial", sans-serif',
  //       },
  //     },
  //   },
  //   MuiDrawer: {
  //     styleOverrides: {
  //       paper: {
  //         transitionDuration: "3s",
  //         transitionTimingFunction: "ease-in-out", // Add your easing function here
  //       },
  //     },
  //   },
  //   MuiSvgIcon: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: "1.25rem", // 20px
  //         "&.MuiSvgIcon-colorWhite": {
  //           color: "#fff",
  //         },
  //       },
  //     },
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         "&:hover": {
  //           backgroundColor: "#393e55", // Lighter background color on hover
  //         },
  //       },
  //     },
  //   },
  //   MuiSelect: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiOutlinedInput-root": {
  //           borderRadius: "10px",
  //         },
  //       },
  //     },
  //   },
  //   MuiFormControl: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiFilledInput-root": {
  //           borderRadius: "10px",
  //         },
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiOutlinedInput-root": {
  //           borderRadius: "10px",
  //           boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //         },
  //         "& .MuiFilledInput-root": {
  //           borderRadius: "10px",
  //           boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //         },
  //       },
  //     },
  //   },

  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //       },
  //     },
  //   },
  //   // MUI X Date Picker overrides to match text field styling
  //   // MuiPickersTextField: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       "& .MuiOutlinedInput-root": {
  //   //         borderRadius: "10px",
  //   //         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //   //       },
  //   //       "& .MuiFilledInput-root": {
  //   //         borderRadius: "10px",
  //   //         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // MuiDatePicker: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       "& .MuiOutlinedInput-root": {
  //   //         borderRadius: "10px",
  //   //         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // MuiDateTimePicker: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       "& .MuiOutlinedInput-root": {
  //   //         borderRadius: "10px",
  //   //         boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   MuiFormHelperText: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-error": {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
  // },
  shadows,
  typography,
  shape: { borderRadius: 4 },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  // nprogress: { color: "#000" },
  // themeName: "Glow LEDs",
};

export default theme;