import React, { Component } from 'react';
import Toprateresturent from "./Toprateresturent";
import Resturentslist from "./Resturentslist";


export default class Resturents extends Component {
    render() {
        return (
            <div>
                
                <Toprateresturent/>
                <Resturentslist/>
                
            </div>
        )
    }
}
