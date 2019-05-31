import * as React from "react";
import {ErrorWrapper} from "../ErrorWrapper/ErrorWrapper";

interface InputProps {
    name: string;
    className: string;
    type: string;
    value: string;
    id: string;
    setValue: (newValue: string) => void;
}

export const InputField = ({name, id, className, type, value, setValue}: InputProps) => {
    return (
        <div style={{ marginTop: "10px", marginBottom: "10px"}}>
            <ErrorWrapper id={id}>
                <div>
                    <label htmlFor="name" style={{display: "block", padding: "6px 10px"}}>{name}</label>
                    <input className={className} type={type} value={value}
                           onChange={(event) => setValue(event.target.value)}/>
                </div>
            </ErrorWrapper>
        </div>
    );
};
