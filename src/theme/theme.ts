import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D6B56D",
      light: "#F5DFA3",
      dark: "#A8843D",
      contrastText: "#0B0B0B",
    },
    secondary: {
      main: "#F7F1E1",
      contrastText: "#0B0B0B",
    },
    background: {
      default: "#050505",
      paper: "#101010",
    },
    text: {
      primary: "#F7F1E1",
      secondary: "#B8B2A3",
    },
  },
  typography: {
    fontFamily: `"Inter", "Montserrat", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.06em",
      fontSize: "clamp(3rem, 9vw, 8rem)",
      lineHeight: 0.9,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.04em",
      fontSize: "clamp(2.3rem, 6vw, 5rem)",
      lineHeight: 1,
    },
    h3: {
      fontWeight: 600,
      fontSize: "clamp(1.8rem, 4vw, 3rem)",
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.15rem)",
      lineHeight: 1.8,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "12px 26px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(214, 181, 109, 0.16)",
        },
      },
    },
  },
});

export default theme;