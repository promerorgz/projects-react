import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import {withSyles} from  '@material-ui/core/styles';
import {style} from './style'
function Navbar(props) {


  return (
    <div className={props.classes.route}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            ElephanTech
          </Typography>
          <IconButton>
            <AddCircleOutline/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withSyles(style)(Navbar)
