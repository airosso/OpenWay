import {RegistrationData} from "../App/AppTs";
import * as React from 'react';

interface DataProps {
    data: RegistrationData[];
}

export const RegistrationDataView = ({data}: DataProps) => {
    return (
        <div style={{paddingLeft: "30px"}}>
            <p>Количество заявок: {data.length}</p>
            {data.map(x => (
                <div style={{padding: "10px"}}>
                    <table>
                        {Object.keys(x).map(key => (
                            <tr>
                                <td>{"" + key}</td>
                                <td>{"" + (x as any)[key]}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            ))}
        </div>
    )
};