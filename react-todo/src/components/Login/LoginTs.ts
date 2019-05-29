import { RegistrationData } from "../App/AppTs";

export async function getData(login: string, password: string): Promise<RegistrationData[]> {
    const result = await fetch("https://localhost:7999/data", {
        method: "POST",
        headers: new Headers({
            "Authorization": btoa(login + ":" + password),
            "Content-Type": "application/x-www-form-urlencoded"
        })
    });
    if (result.ok) {
        return result.json();
    } else {
        throw result.statusText;
    }
}
