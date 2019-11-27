import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { getToken, setToken, setUser} from '../services/auth';
let header = {
    headers :{
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${getToken()}`
    }
  }
export default class Signinpage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: document.getElementById("formBasicEmail").value,
      password: document.getElementById("formBasicPassword").value
    };

    axios
      .post("http://localhost:5300/api/auth/login", user)
      .then(res => {
      
        if (res.data.token) {
          setToken(res.data.token)

          let data = {};
          data.user = res.data.user;
          data.isAuthenticated = true;
          data.hasError = false;
          // console.log(data);

          this.props.loginHandler(data)
        }
      })
      .catch(err => {
        let data = {};
        data.hasError = true
        this.props.loginHandler(data)

      });
  }

  auth(){
    axios.get('http://localhost:5300/api/foodtrucks', header)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
 

  render() {
console.log(this.props)
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            SING IN
          </Button>
          <Button variant="primary" type="button" >
            REGISTER
          </Button>
        </Form>
      </div>
    );
  }
}
