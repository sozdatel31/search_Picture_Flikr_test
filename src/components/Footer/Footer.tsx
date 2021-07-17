import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import style from './Footer.module.css'

export function Footer() {

    return (
        <div className={style.div}>
            <AppBar color="inherit" position="static">
                <Toolbar>
                    <Typography variant="h6" className={style.div}>
                        Copyrights
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}