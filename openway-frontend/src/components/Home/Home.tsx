import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
    public render() {
        return (
            <div id="home">
                <nav>
                    <ul>
                        <li><Link to="/registration">Registration</Link></li>
                        <li><Link to="/login">Log in as administrator</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
