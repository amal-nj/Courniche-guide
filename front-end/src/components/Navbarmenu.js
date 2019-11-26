import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Jwflogo from "../assets/images/JWF-logo.png";
import Profileimg from "../assets/images/profilecopy.png";
import Resturents from "./Resturents";
import Foodtrucks from "./Foodtrucks";
import Homepage from "./Homepage";
import SushiCentro from "./SushiCentro";



export default class Navbarmenu extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
              <Navbar className="navmenu">
                 <img className="jwflogo" src={Jwflogo} />
                 <h1>Jeddah WaterFront</h1>
                 <Link  className="nav-link" to="/JeddahWaterFront">HOME</Link>
                 <Link  className="nav-link" to="/Resturents">Resturents</Link>
                 <Link  className="nav-link" to="/FoodTrucks">Food Trucks</Link>
                 
                      <img className="profileimg" src={Profileimg}/>
                      <NavDropdown  id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
                      </NavDropdown>
             </Navbar>
             <Switch>
             <Route  path="/JeddahWaterFront" component={Homepage} />
             <Route  path="/Resturents" component={Resturents} />
             <Route  path="/Foodtrucks" component={Foodtrucks} />
             <Route  path="/SushiCentroResturent" component={SushiCentro} />
            </Switch>
         </BrowserRouter>
           </div> 
        )
    }
}
