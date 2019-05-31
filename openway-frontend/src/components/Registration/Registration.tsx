import {createBrowserHistory} from "history";
import React, {Component} from "react";
import {RegistrationMenu} from "../RegistrationMenu/RegistrationMenu";
import regLogo from "./images/OpenWay_icons.jpg";
import style from "./Registration.module.css";
import {Link} from "react-router-dom";

export const Registration = () => {
    return (
        <div id="registration" className={style.reg}>
            <div className={style.logo}>
                <img alt="logo" src={regLogo} width="720px"/>
            </div>
            <div className={style.info}>
                <h1>Заявка на поступление в Летнюю Школу OpenWay</h1>
                <p>Заявки принимаются до <span className={style.colored}>31 мая</span> включительно.
                    Если у вас есть вопросы по стажировке, обращайтесь к Екатерине Алудаури - куратору Летней Школы
                    по электронной почте <a href="mailto:ealudauri@openwaygroup.com">ealudauri@openwaygroup.com </a>
                    или по телефону <a href="tel:+79219653263">+7 (921) 965 32 63</a> (mobile, whatsapp, telegram)
                </p>
            </div>
            <div className={style.info}>
                <Link to="/login">Войдите</Link>
                <p style={{display: "inline-block"}}>
                    &nbsp;под аккаунтом администратора, чтобы посмотреть заявки
                </p>
            </div>
            <RegistrationMenu/>
        </div>
    );
}
