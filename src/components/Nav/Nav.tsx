import React from 'react';
import {Grid, IconButton} from '@material-ui/core';
import {Bookmarks, Search} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import style from "./Nav.module.css"

export function Nav() {

    return (
        <div className={style.menu}>
            <Grid className={style.grid} >
                <NavLink to="/search" activeClassName={style.active}>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </NavLink>
                <NavLink to="/bookmarks" activeClassName={style.active}>
                    <IconButton>
                        <Bookmarks/>
                    </IconButton>
                </NavLink>
            </Grid>
        </div>
    )
}
