import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Resturentone from "../assets/images/FishMarket.jpg";
import Resturenttwo from "../assets/images/DarAlKamar.jpg";
import Resturentthree from "../assets/images/Piato.jpg";



export default class Toprateresturent extends Component {
    render() {
        return (
            <div>
             <Carousel>
               <Carousel.Item>
                 <h1>Top Rate Resturent</h1>
                 <img
                   className="d-block w-100"
                   src={Resturentone} width="100" height="400" 
                   alt="First slide"
                 />
                 <Carousel.Caption>
                   <h3>Name Resturent</h3>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Top Rate Resturent</h1>
                <img
                 className="d-block w-100"
                 src={Resturenttwo} width="800" height="400" 
                 alt="Third slide"
                />
                <Carousel.Caption>
                 <h3>Name Resturent</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Top Rate Resturent</h1>
                <img
                 className="d-block w-100"
                 src={Resturentthree} width="800" height="400"
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
