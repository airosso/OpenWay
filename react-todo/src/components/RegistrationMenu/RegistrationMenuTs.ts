import {RegistrationData} from "../App/AppTs";

export interface FieldError {
    message: string;
    field: string;
}

interface Interest {
    name: string;
    key: string;
}

export const interestsCheckboxes: Interest[] = [
    { name: "Бизнес-анализ, IT-консалтинг", key: "first"},
    { name: "Backend-разработка", key: "second"},
    { name: "Frontend-разработка", key: "third"},
    { name: "Тестирование, управление качеством", key: "forth"},
    { name: "Создание технической документации", key: "fifth"},
    { name: "Внедрение сложного ПО (enterprise)", key: "sixth"},
    { name: "Участие в финтех-проектах", key: "seventh"},
    { name: "Работа с базами данных", key: "eighth"},
    { name: "Поддержка клиентов", key: "ninth"},
    { name: "Маркетинг в области IT", key: "tenth"},
    { name: "Компьютерная безопасность", key: "eleventh"},
    { name: "Другое (укажите в поле внизу)", key: "twelfth"},
];


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
