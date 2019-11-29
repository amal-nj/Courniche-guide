import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
import CubeFoodTruck from "../assets/images/CubeFoodTruck.png";
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Admaddfoodtruck from "./Admaddfoodtruck";



export default class Adminfoodtrucks extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
              <Navbar >
                 <Button variant="info">
                 <Link  className="nav-link" to="/Admaddfoodtruck">ADD FOOD TRUCK</Link>
                 </Button>
             </Navbar>
               <Switch>
             <Route  path="/Admaddfoodtruck" component={Admaddfoodtruck} />
            </Switch>

                <br/>

               <Container>
                  <Row>
                    <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Food Trucks</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Select</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Food Trucks</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Select</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Food Trucks</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Select</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={CubeFoodTruck} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Food Trucks</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Select</Button>
                      </Col>
                  </Row>
                  <br/>
               </Container>
               </BrowserRouter>
            </div>
        )
    }
}
