import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import Jwflogo from "../assets/images/JWF-logo.png";
import Profileimg from "../assets/images/profilecopy.png";
import Resturents from "./Resturents";
import Foodtrucks from "./Foodtrucks";
import Homepage from "./Homepage";
import SushiCentro from "./SushiCentro";
import Signinpage from "./Signinpage";
import Registerpage from "./Registerpage";

import { getUser, getToken } from "../services/auth";
import Userpage from "./Userpage";

export default class Navbarmenu extends Component {
  userinfo(){
    return JSON.parse(getUser())
  }
  render() {
    let log = getToken() ? (
      <div>
      <NavDropdown.Item href={`Users/${this.userinfo().user._id}`} >
        edit profile
      </NavDropdown.Item>
      <NavDropdown.Item href="JeddahWaterFront" onClick={this.props.logout}>
        log out
      </NavDropdown.Item>
      </div>
   
    ) : (
      <div>
        <NavDropdown.Item href="register">Register</NavDropdown.Item>
        <NavDropdown.Item href="login">Login</NavDropdown.Item>
      </div>
    );

    return (
      <div>
        <BrowserRouter>
          <Navbar className="navmenu">
            <img className="jwflogo" src={Jwflogo} />
            <h1>Jeddah WaterFront</h1>
            <Link className="nav-link" to="/JeddahWaterFront">
              HOME
            </Link>
            <Link className="nav-link" to="/Resturents">
              Resturents
            </Link>
            <Link className="nav-link" to="/FoodTrucks">
              Food Trucks
            </Link>

            <img className="profileimg" src={Profileimg} />
            <NavDropdown id="basic-nav-dropdown" title="nav bar">
              {log}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
            </NavDropdown>
          </Navbar>
          <Switch>
            <Route path="/JeddahWaterFront" component={Homepage} />
            <Route path="/Resturents" component={Resturents} />
            <Route path="/Foodtrucks" component={Foodtrucks} />
            <Route path="/SushiCentroResturent" component={SushiCentro} />

            <Route
              path="/login"
              render={() =>
                getToken() ? (
                  <Redirect to="/JeddahWaterFront" />
                ) : (
                  <Signinpage
                    {...this.props}
                    loginHandler={this.props.loginHandler}
                  />
                )
              }
            />

            <Route
              path="/register"
              render={() =>
                getToken() ? (
                  <Redirect to="/JeddahWaterFront" />
                ) : (
                 <Registerpage/>
                )
              }
            />

            <Route exact
              path="/Users/:id"
              render={() =>
                !getToken() ? (
                  <Redirect to="/login" />
                ) : (
                  <Userpage
                    {...this.props}
                    userinfo={this.userinfo()}
                  />
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
