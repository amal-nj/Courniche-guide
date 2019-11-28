import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button,Container, Row, Col } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";



export default class Resturentslist extends Component {

    render() {
      // console.log(this.props.food);
      let isAdmin=this.props.isAdmin?<div><Link to={`/editrestuarnt/${this.props.id}`} ><Button variant="dark"> Edit</Button></Link></div>:<div><Button variant="dark"> <Link to={ "/Restaurantinfo/"+this.props.foodName} >see ditals</Link></Button> <br/>
      <br/><Button variant="dark"> Go to Location </Button></div> 
        return (
            <div>
           

                <br/>

               <Container>
                  <Row>
                    <Col sm={4}><img src={this.props.foodImg} width="300" height="200"/></Col>
                    <Col sm={8}>
                      <h1>{this.props.foodName}</h1>
                      <h4>{this.props.foodType}</h4>
                      {isAdmin}

                      </Col>
                  </Row>
                  <br/>
                  
               </Container>
            </div>
        )
    }
}

