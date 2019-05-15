import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import { Typography } from '@material-ui/core';


function App(props) {
    return (
        <div className="App">
            <AppBar color="primary" position="sticky">
                <Toolbar variant="dense">
                    <Typography variant="headline" color="inherit">Hello</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
