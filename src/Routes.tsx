import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {SearchBoardContainer} from "./components/SearchBoard/SearchBoardContainer";
import {BookMarks} from "./components/BookMarks";
import {P404} from "./components/404/404";


export function Routes() {
    return <Switch>
        <Route exact path="/search" render={() => <SearchBoardContainer/>}/>
    <Route path="/bookmarks" render={() => <BookMarks/>}/>
    <Route path="/404" render={() =>  <P404/>}/>
    <Redirect exact from="/" to="/search"/>
    <Redirect from="*" to="/404"/>
        </Switch>
}