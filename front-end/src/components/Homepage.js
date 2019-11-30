import React, { Component } from 'react';
import { Card, CardDeck, Navbar, Image } from 'react-bootstrap';
import Jeddahimg from "./Jeddahimg";
import Andalusia from "../assets/images/Andalusia.jpg";
import Foodtruck from "../assets/images/CubeFoodTruck.png";




export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Jeddahimg/>

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
            </div>
        )
    }
}
