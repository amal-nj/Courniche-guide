import React, { Component } from 'react';
import Dumplings from "../assets/images/Dumplings.jpg";
import SushiCentroimg from "../assets/images/SushiCentro.jpg";
import { Card,CardGroup, Button } from 'react-bootstrap';
import Star4rate from "../assets/images/star4.png";


export default class SushiCentro extends Component {
    render() {
        return (
            <div className="Resturentinfo">
                <Card >
                 <Card.Img variant="top" src={SushiCentroimg} width="100" />
                </Card>
                <CardGroup>
                <Card>
                 <Card.Img variant="top" src={Dumplings} />
                </Card>
                <Card>
                 <Card.Img variant="top" src={Dumplings} />
               </Card>
               <Card>
                <Card.Img variant="top" src={Dumplings} />
               </Card>
               </CardGroup>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum.  
               </p>
               <h4>Reviews</h4>
               <h6>Name</h6>
               <img src={Star4rate}/>
               <Button variant="info">Make a reservation</Button>
               <br/>

            </div>
        )
    }
}
