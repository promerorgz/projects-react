import React from "react";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App({ classes }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" />
    </MuiThemeProvider>
  );
}
export default App;
