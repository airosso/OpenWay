import * as React from "react";
import {useState} from "react";
import {InputField} from "../InputField/InputField";
import style from "./Menu.module.css";
import {ErrorWrapper} from "../ErrorWrapper/ErrorWrapper";

interface MenuProps {
    onLogin: (login: string, pass: string) => void;
}

export const Menu = ({onLogin}: MenuProps) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={style.menu}>
            <ErrorWrapper id="login">
                <InputField name="Login" id="log" className={style.field} type="text" value={login}
                            setValue={setLogin}/>
                <InputField name="Password" id="password" className={style.field} type="text" value={password}
                            setValue={setPassword}/>
                <input className={style.enter} type="button" value="Войти" onClick={() => onLogin(login, password)}/>
            </ErrorWrapper>
        </div>

    );
};
