import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Grid, withStyles, IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import CardMenu from './CardMenu';

import styles from './styles'


const initialState = {
    projectTitle: 'Project Title',
    client: 'Client',
    startDate: 'Start Date',
    endDate: 'End Date',
    description: '',
    clientLogo: ''
};


const ProjectCard = ({ classes }) => {

    const [state, setState] = useState(initialState);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { projectTitle, client, startDate, endDate, description, clientLogo } = state;

    const handleClick = ({ currentTarget }) => {
        setAnchorEl(currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Grid container className={classes.root}>
            <Card className={classes.card}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs className={classes.header}>
                        <Typography variant='h5'>{projectTitle || 'Project Title'}</Typography>
                        <Typography variant='h6'>{client || 'Client'}</Typography>
                        <Typography variant='caption'>{startDate || 'start'} - {endDate || 'end'}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar className={classes.clientImg} src={clientLogo}>{client.charAt(0)}</Avatar>
                    </Grid>
                </Grid>
                <Typography paragraph>{description || 'Bacon ipsum dolor amet turducken t-bone boudin turkey biltong capicola. Jowl pig brisket tail. Frankfurter buffalo pork chop short ribs chicken fatback salami tenderloin porchetta hamburger flank pork loin alcatra. Brisket capicola salami short loin, swine chuck prosciutto fatback pig drumstick. Pastrami beef corned beef kevin shoulder porchetta pork chop tenderloin capicola. Short loin landjaeger jowl fatback.'}</Typography>
                <Grid item xs className={classes.options}>
                    <IconButton onClick={handleClick}>
                        <MoreVert />
                    </IconButton>
                </Grid>
                <CardMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
            </Card >
        </Grid >
    )
}

export default withStyles(styles)(ProjectCard)
