import React, { Component } from 'react';
import { Card, CardDeck, Navbar } from 'react-bootstrap';
import Andalusia from "../assets/images/Andalusia.jpg";
import Foodtruck from "../assets/images/CubeFoodTruck.png";

export default class Adminpage extends Component {
    render() {
        return (
            <div>
                
                <CardDeck>
                 <Card>
                   <Card.Img variant="top" src={Andalusia} />
                   <Card.Body className="navmenu">
                   <Card.Title ><button ><a href="./Adminresturents">Modify Resturents</a></button></Card.Title>
                   </Card.Body>
                 </Card>
                 <Card>
                   <Card.Img variant="top" src={Foodtruck} />
                   <Card.Body className="navmenu">
                   <Card.Title ><button><a href="./Adminfoodtrucks">Modify Food Trucks</a></button></Card.Title>
                   </Card.Body>
                 </Card>
                </CardDeck>  
            </div>
        )
    }
}
