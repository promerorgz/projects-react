import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#336F80" },
  secondary: { main: "#A8FFE7" }
};

const themeName = "elefanTech";

export default createMuiTheme({
  palette,
  themeName,
  typography: {
    useNextVariants: true
  }
});

// #336F80 primary
// #A8FFE7 secondary
// #1A3740 dark blue
// #A3E4EB light blue

// #ED3A2F danger
