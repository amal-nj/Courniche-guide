import React, { Component } from 'react';
import Topratefoodtrucks from "./Topratefoodtrucks";
import Foodtruckslist from "./Foodtruckslist";

export default class Foodtrucks extends Component {
    render() {
        return (
            <div>
                <Topratefoodtrucks/>
                <Foodtruckslist/>
            </div>
        )
    }
}
