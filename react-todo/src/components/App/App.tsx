import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import style from "./App.module.css";

export class App extends Component {
    public render() {
        return (
            <div className={style.app}>
                <Route exact path="/" component={Home}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
            </div>
        );
    }
}
