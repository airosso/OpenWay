import {RegistrationData} from "../App/App";

export interface FieldError {
    message: string;
    field: string;
}

export function submit(data: RegistrationData) {
    const errors: FieldError[] = [];
    const state: any = data;
    console.log(Object.keys(state));
    const nonEmptyFields = ["name", "surname", "email", "date", "university", "faculty", "department", "english", "knowledge"];
    Object.keys(state).filter((x) => nonEmptyFields.includes(x)).forEach((field) => {
        if (state[field] !== undefined && state[field].trim().length === 0) {
            const error = {
                message: "Поле не должно быть пустым",
                field,
            };
            errors.push(error);
        }
    });
    if (!data.agreement) {
        errors.push({
            message: "Вы должны принять условия соглашения",
            field: "agreement"
        });
    }
    if (Object.keys(state.interests).every(x => !state[x])) {
        errors.push({
            field: "interests",
            message: "Вы должны выбрать хотя бы один пункт"
        });
    }

    return errors;
}
