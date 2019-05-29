import { Component, useContext } from "react";
import * as React from "react";
import { Error } from "../Error/Error";
import { FieldError } from "../RegistrationMenu/RegistrationMenuTs";

export const ErrorContext = React.createContext<FieldError[]>([]);

interface ErrorWrapperProps {
    id: string;
}

export class ErrorWrapper extends Component<ErrorWrapperProps> {
    static contextType = ErrorContext;
    context!: FieldError[];

    render() {
        const errors = this.context;
        const error = errors.find((x) => x.field === this.props.id);
        return (
            <div>
                {error !== undefined && <Error {...error}/>}
                {this.props.children}
            </div>
        );
    }
}
