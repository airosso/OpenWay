import * as React from "react";
import style from "./Menu.module.css";
import { FieldError } from "./MenuWork";

export const Error = ({message}: FieldError) => {
    return (
        <div className={style.errorField}>
            <span className={style.errorSign}>{"\u26A0\u00A0"}</span>{message}
        </div>
    );
};
