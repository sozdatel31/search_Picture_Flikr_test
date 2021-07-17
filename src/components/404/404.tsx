import React from "react";
import {NavLink} from "react-router-dom";
import s from "./404.module.css"

export function P404() {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <h2>404</h2>
                <h4>Something went wrong! Page not found</h4>
                <p>This page does not exist, or it has not been created yet</p>
                <NavLink to="/search">Back to search picture</NavLink>
            </div>
        </div>
    )
}