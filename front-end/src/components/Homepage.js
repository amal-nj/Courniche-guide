import React, { Component } from 'react';
<<<<<<< HEAD
import { Card, CardDeck, Navbar } from 'react-bootstrap';
=======
import { Card, CardDeck, Navbar, Image } from 'react-bootstrap';
>>>>>>> 828043bbaee29e8cbee722819fada293509c5e4e
import Jeddahimg from "./Jeddahimg";
import Andalusia from "../assets/images/Andalusia.jpg";
import Foodtruck from "../assets/images/CubeFoodTruck.png";




export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Jeddahimg/>
<<<<<<< HEAD
                <Navbar className="navmenu" expand="lg">
                  <Navbar.Brand>Courniche Dining</Navbar.Brand>
                </Navbar>
                <CardDeck>
                 <Card>
                   <Card.Img variant="top" src={Andalusia} />
                   <Card.Body className="navmenu">
                   <Card.Title ><a href="./Resturents">Resturents</a></Card.Title>
                   </Card.Body>
                 </Card>
                 <Card>
                   <Card.Img variant="top" src={Foodtruck} />
                   <Card.Body className="navmenu">
                   <Card.Title ><a href="./FoodTrucks">Food Trucks</a></Card.Title>
                   </Card.Body>
                 </Card>
                </CardDeck>   
=======

                <CardDeck>
                 <Card>
                 <Image src={Andalusia} roundedCircle />
                 <Card.Title ><a href="./Resturents"><h2 className="titleName">Restaurants</h2></a></Card.Title>

                 </Card>
                 <Card>
                   <Image src={Andalusia} roundedCircle />
                    <Card.Title ><a href="./FoodTrucks"><h2 className="titleName">Food Trucks</h2></a></Card.Title>
                 </Card>
                </CardDeck>
>>>>>>> 828043bbaee29e8cbee722819fada293509c5e4e
            </div>
        )
    }
}
