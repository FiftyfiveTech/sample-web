/* eslint-disable quotes */
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#6153BB",
    },
    secondary: {
      main: "#bdbdbd",
    },
    dark: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
    },
  },
  typography: {
    subtitle1: {
      color: "#4D536B",
      fontWeight: "600",
      fontSize: "16px",
      marginBottom: "2px",
    },
    subtitle2: {
      color: "#00000080",
      fontWeight: "600",
      fontSize: "16px",
      marginBottom: "2px",
    },
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
    ].join(","),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#494D61",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "27px",
            color: "#4C5165",
          },
          "&.Mui-selected": {
            backgroundColor: "none",
            borderBottom: "5.39384px solid #6153BB",
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          "& .MuiStepIcon-root": {
            width: "35px",
            height: "35px",
          },
          "& .Mui-disabled  .MuiStepIcon-root": {
            color: "#DDDDDD",
          },
          "& .MuiStepLabel-label": {
            fontWeight: "700 !important",
            fontSize: "16px !important",
          },
          "& .Mui-disabled": {
            color: "#DDDDDD",
          },
          "& .MuiStepLabel-root .Mui-completed": {
            color: "#39CB15",
            cursor: "pointer",
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "#39CB15",
          },
          "& .MuiStepConnector-root.MuiStepConnector-horizontal": {
            top: "19px",
            left: "calc(-50% + 24px)",
            right: "calc(50% + 24px)",
          },
          "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
            color: "#39CB15",
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: "#6153BB",
          },
          "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
            color: "#6153BB",
          },
          "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
            fill: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "1px",
          backgroundColor: "#FAFAFA",
          borderRadius: "12.926px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "12.926px",
            "& fieldset": {
              border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            },
            "&:hover fieldset": {
              border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            },
            "&.Mui-disabled fieldset": {
              border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            },
            "&.Mui-focused fieldset": {
              border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            },
            "&.Mui-error fieldset": {
              border: "1.2926px solid #FF1B1B",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          padding: "10px",
          boxShadow: " 0px 0px 26px rgba(129, 85, 255, 0.03)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          margin: "1px",
          backgroundColor: "#FAFAFA",
          borderRadius: "5px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12.926px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12.926px",
          },
          "&.Mui-hover .MuiOutlinedInput-notchedOutline": {
            border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12.926px",
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "1.2926px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "12.926px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          textTransform: "capitalize",
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "60px",
          width: "60px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h5: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.4rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.6rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.8rem",
      },
    },
    h6: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.4rem",
      },
    },
    subtitle1: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.2rem",
      },
    },
    subtitle2: {
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
