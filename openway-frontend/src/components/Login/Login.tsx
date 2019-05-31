import React, {Component, useState} from "react";
import {Menu} from "../LoginMenu/Menu";
import logLogo from "./images/OW_Logotype_CMYK.png";
import style from "./Login.module.css";
import {RegistrationData} from "../App/AppTs";
import {getData} from "./LoginTs";
import {ErrorWrapper, ErrorContext} from "../ErrorWrapper/ErrorWrapper";
import {FieldError} from "../RegistrationMenu/RegistrationMenuTs";
import {RegistrationDataView} from "../RegistrationDataView/RegistrationDataView";

export const Login = () => {
    const [data, setData] = useState<RegistrationData[]>([]);
    const [logged, setLogged] = useState(false);
    const [error, setError] = useState<FieldError | undefined>(undefined);

    const onLogin = (login: string, password: string) => {
        getData(login, password).then(x => {
                setData(x);
                setLogged(true);
                console.info(x);
            }
        ).catch(x => {
            setError({
                    message: "Неверный логин или пароль",
                    field: "login"
                }
            );
        });
    };

    return (
        <ErrorContext.Provider value={error ? [error] : []}>
            <div id="login">
                <div className={style.header}>
                    <img alt="logo" src={logLogo} width="40%"/>
                </div>
                {(!logged) ? <Menu onLogin={onLogin}/> : <RegistrationDataView data={data}/>}
            </div>
        </ErrorContext.Provider>
    );
};
