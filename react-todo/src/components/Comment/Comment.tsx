import * as React from "react";

import { ErrorWrapper } from "./ErrorWrapper";
import style from "./Menu.module.css";

interface CommentsProps {
    name: string;
    value: string;
    id: string;
    setValue: (newValue: string) => void;
}

export const Comment = ({name, id, value, setValue}: CommentsProps) => {

    let count = 1;
    for (let i = 0; i < value.length; i++) {
        if (value.charAt(i) === "\n") {
            count++;
        }
    }

    return (
        <ErrorWrapper id={id}>
            <p>
                {name}
                <textarea className={style.comment} rows={3} value={value} style={{ height: count * 20 + "px" }}
                          onChange={(event) => setValue(event.target.value)}/>
            </p>
        </ErrorWrapper>
    );
};
