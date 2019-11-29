import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
export default class Settingpage extends Component {
  render() {
    return (
      <div className="passwordSettings">
          <Button
          text="Change Password"
          ><Link  className="nav-link" to="./Changepassword">Change Password</Link></Button>
      </div>
    );
  }
}