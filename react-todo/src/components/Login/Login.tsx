import React, {Component} from "react";
import {Menu} from "../LoginMenu/Menu";
import logLogo from "./images/OW_Logotype_CMYK.png";
import style from "./Login.module.css";

export class Login extends Component {
    public render() {
        return (
            <div id="login">
                <div className={style.header}>
                    <img alt="logo" src={logLogo} width="40%"/>
                </div>
                <Menu/>
            </div>
        );
    }
}
