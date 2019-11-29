import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from 'axios'

export default class Registerpage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onSubmit(e) {
    e.preventDefault();
    //form valdiation needs to be done first
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("formGridEmail").value,
      password: document.getElementById("formGridPassword").value
    };

    axios
      .post("http://localhost:5300/api/auth/register", user)
      .then(res => {

         console.log(res.data)
         document.getElementById('redirect').click();
        
      })
      .catch(err => {
        console.log(err)
     

      });
  }

  render() {
    return (
      <div>
        <a href="/login"  style={{display:'none'}} id="redirect">yes there are more civilized ways to redirect the user but this is what I can do for now</a>
        <Form>
          <Form.Row>
          <Form.Group as={Col} controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
         
          
          <Form.Group as={Col} controlId="repeatedPassword">
              <Form.Label>Renter Your Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>


          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Agree to the terms of services"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
