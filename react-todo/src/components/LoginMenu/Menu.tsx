import * as React from "react";
import { useState } from "react";
import { InputField } from "../RegistrationMenu/InputField";
import style from "./Menu.module.css";

export const Menu = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={style.menu}>
            <InputField name="Login" id="log" className={style.field} type="text" value={login}
                        setValue={setLogin}/>
            <InputField name="Password" id="password" className={style.field} type="text" value={password}
                        setValue={setPassword}/>
            <input className={style.enter} type="button" value="Войти"/>
        </div>

    );
};
