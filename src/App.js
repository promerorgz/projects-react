import React from "react";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ProjectCard from './components/ProjectCard'

function App({ classes }) {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App" >
                <ProjectCard />
            </div>
        </MuiThemeProvider>
    );
}
export default App;
