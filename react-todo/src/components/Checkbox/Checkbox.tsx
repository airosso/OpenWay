import * as React from "react";

import style from "./Menu.module.css";

export interface CheckboxProps {
    name: string;
    value: boolean;
    setValue: (name: string) => void;
}

export const CheckBox = ({name, value, setValue}: CheckboxProps) => {
    return (
        <p>
            <input className={style.checkbox} checked={value} type="checkbox" onChange={() => setValue(name)}/>
            <label className={style.labelCheckbox}>{name}</label>
        </p>
    );
};
