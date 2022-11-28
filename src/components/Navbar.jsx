import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './navbarStyles'
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit"  >
                        <img src="https://i.fbcd.co/products/original/c30f6ce7e9ef4378309721483007e1d34f641660fcae65a66ccfd64860c58f2f.jpg" alt="ecom" height="65px" className={classes.image} />
                        Online Shop
                    </Typography>
                    <Typography component={Link} to="/aboutus" variant="h6" className={classes.title}>About Us</Typography>
                    <Typography component={Link} to="/contactus" variant="h6" className={classes.title}>Contact Us</Typography>
                    <div className={classes.grow} />
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
