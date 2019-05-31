import {RegistrationData} from "../App/AppTs";
import * as React from 'react';

interface DataProps {
    data: RegistrationData[];
}

export const RegistrationDataView = ({data}: DataProps) => {
    return (
        <ul>
            {data.map(x => (<li key={x.name}>{JSON.stringify(x)}</li>))}
        </ul>
    )
};