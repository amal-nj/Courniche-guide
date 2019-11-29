import React, { Component } from 'react';
import Jeddahwaterfront from "../assets/images/jeddahwaterfront.jpg";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';



export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Player 
                  autoPlay
                  src="https://www.jeddah.gov.sa/Projects/JW/video/JWPromo.mp4"/>
           </div>
        )
    }
}
