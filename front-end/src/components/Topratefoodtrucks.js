import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Foodtrucksone from "../assets/images/CaravanBurger.jpg";
import Foodtruckstwo from "../assets/images/Eatfoodtruck.jpg";
import Foodtrucksthree from "../assets/images/WabeFoodTruck.png";



export default class Topratefoodtrucks extends Component {
    render() {
        return (
            <div>
                <Carousel>
               <Carousel.Item>
                 <h1>Top Rate Food Trucks</h1>
                 <img
                   className="d-block w-100"
                   src={Foodtrucksone} width="100" height="400" 
                   alt="First slide"
                 />
                 <Carousel.Caption>
                   <h3>Name Food Trucks</h3>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Top Rate Food Trucks</h1>
                <img
                 className="d-block w-100"
                 src={Foodtruckstwo} width="800" height="400" 
                 alt="Third slide"
                />
                <Carousel.Caption>
                 <h3>Name Food Trucks</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Top Rate Food Trucks</h1>
                <img
                 className="d-block w-100"
                 src={Foodtrucksthree} width="800" height="400"
                 alt="Third slide"
                 />
                <Carousel.Caption>
                  <h3>Name Resturent</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
            </div>
        )
    }
}
