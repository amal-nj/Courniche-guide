import React, { Component } from 'react';
import Toprateresturent from "./Toprateresturent";
import Resturentslist from "./Resturentslist";


export default class Resturents extends Component {
    componentDidMount(){
        console.log("compnent did mount")
      }
    render() {
        return (
            <div>
                
                <Toprateresturent/>
                <Resturentslist/>
                
            </div>
        )
    }
}
