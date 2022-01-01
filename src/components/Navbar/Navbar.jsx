import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';
import logo from '../../assets/logo.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location =  useLocation();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/">
                    <img src={logo} alt="TheArtCorner" height="25px" className={classes.image}/>
                    The Art Corner
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/'  && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> )} 
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
