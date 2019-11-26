import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Twitter from "../assets/images/twitter.png";
import Facebook from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";


export default class Footermenu extends Component {
    render() {
        return (
            <div>
                <Navbar className="navmenu" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Contact us</Nav.Link>
                  <Nav.Link href="#link">Help</Nav.Link>
                  <Nav.Link href="https://twitter.com" target="_blank"><img src={Twitter}/></Nav.Link>
                  <Nav.Link href="https://www.facebook.com" target="_blank"><img src={Facebook}/></Nav.Link>
                  <Nav.Link href="https://www.youtube.com" target="_blank"><img src={Youtube}/></Nav.Link>
               </Nav>
               </Navbar.Collapse>
               </Navbar>
            </div>
        )
    }
}
