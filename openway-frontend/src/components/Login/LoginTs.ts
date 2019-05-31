import {RegistrationData} from "../App/AppTs";

export async function getData(login: string, password: string): Promise<RegistrationData[]> {
    const result = await fetch("/sign-in", {
        method: "GET",
        headers: new Headers({
            "Authorization": "Basic " + btoa(login + ":" + password),
            "Content-Type": "application/x-www-form-urlencoded"
        })
    });
    if (result.ok) {
        return result.json();
    } else {
        throw result.statusText;
    }
}

export async function sendData(data: RegistrationData): Promise<Response> {
    return fetch("/update", {
        method: "POST",
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(data)
    });
}
