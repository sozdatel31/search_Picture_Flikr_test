import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'

export function Header() {

    return (
        <div className={style.div}>
            <AppBar color="inherit" position="static">
                <Toolbar>
                    <NavLink className={style.navLink} to="/search">
                        <Typography variant="h5">
                            Image Finder
                        </Typography>
                    </NavLink>
                    <div className={style.div}/>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
