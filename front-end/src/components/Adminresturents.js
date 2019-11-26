import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
import Andalusia from "../assets/images/Andalusia.jpg";
import SushiCentroimg from "../assets/images/SushiCentro.jpg";
import { Route, BrowserRouter, Switch, Link,} from 'react-router-dom';
import Admaddresturent from "./Admaddresturent";




export default class Adminresturents extends Component {
    render() {
        return (
            <div>
              <BrowserRouter>
              <Navbar >
                 <Button variant="info">
                 <Link  className="nav-link" to="/Admaddresturent">ADD RESTURENT</Link>
                 </Button>
             </Navbar>
               <Switch>
             <Route  path="/Admaddresturent" component={Admaddresturent} />
            </Switch>
                <br/>
               <Container>
                  <Row>
                    <Col sm={4}><img src={SushiCentroimg} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Sushi Centro</h3>
                      <h6>Japanese</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Edit</Button>
                      <Button variant="info">Delete</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Resturent</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Edit</Button>
                      <Button variant="info">Delete</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Resturent</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Edit</Button>
                      <Button variant="info">Delete</Button>
                      </Col>
                  </Row>
                  <br/>
                  <Row>
                   <Col sm={4}><img src={Andalusia} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h3>Resturent</h3>
                      <h6>Lorem</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit sit amet justo rutrum rutrum. </p>
                      <Button variant="info">Edit</Button>
                      <Button variant="info">Delete</Button>
                      </Col>
                  </Row>
                  <br/>
               </Container>
               
         </BrowserRouter>
            </div>
        )
    }
}
