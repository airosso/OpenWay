import * as React from "react";

import { ErrorWrapper } from "./ErrorWrapper";
import style from "./Menu.module.css";

interface CommentsProps {
    name: string;
    value: string;
    id: string;
    setValue: (newValue: string) => void;
}

export const Comments = ({name, id, value, setValue}: CommentsProps) => {
    return (
        <ErrorWrapper id={id}>
            <p>
                {name}
                <textarea className={style.comment} rows={3} value={value}
                          onChange={(event) => setValue(event.target.value)}/>
            </p>
        </ErrorWrapper>
    );
};
