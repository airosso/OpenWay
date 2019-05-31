import React, { Component } from "react";
import {Redirect, Route} from "react-router-dom";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import style from "./App.module.css";

export class App extends Component {
    public render() {
        return (
            <div className={style.app}>
                <Route exact path="/" component={Registration} />
                <Route exact path="/login" component={Login}/>
            </div>
        );
    }
}
