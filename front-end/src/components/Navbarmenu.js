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
import Signinpage from "./Signinpage";
import Registerpage from "./Registerpage";

import { getUser, getToken } from "../services/auth";
import Userpage from "./Userpage";
import Changepassword from "./Changepassword";

import axios from 'axios';
import Restaurantinfo from './Restaurantinfo'
import Foodtruckinfo from './Foodtruckinfo'
import Onefoodtruck from './Onefoodtruck'
import Onerestaurant from './OneRestaurant'
import Admaddfoodtruck from './Admaddfoodtruck'
import unauthorized from './unauthorized'
import Admaddresturent from './Admaddresturent'
import Editfoodtruck from "./Editfoodtruck";
import Editrestuarant from './Editrestuarant'


export default class Navbarmenu extends Component {
  state = {
    data: [],
    restaurantdata: []
  };
  userinfo() {
    return JSON.parse(getUser());
  }

  componentDidMount() {
    axios
      .get("http://localhost:5300/api/foodtrucks/")
      .then(res => {
        this.setState({ data: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
    axios
      .get("http://localhost:5300/api/Restaurants/")
      .then(res => {
        this.setState({ restaurantdata: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.userinfo());
    let log = getToken() ? (
      <div>
        <NavDropdown.Item href={"/settings"}>Settings</NavDropdown.Item>
        <NavDropdown.Item href="/" onClick={this.props.logout}>
          Log Out
        </NavDropdown.Item>
      </div>
    ) : (
      <div>
        <NavDropdown.Item href="register">Register</NavDropdown.Item>
        <NavDropdown.Item href="login">Login</NavDropdown.Item>
      </div>
    );
      let access=false
      if(this.props.userinfo){
        if(this.props.userinfo.user){
          access=this.props.userinfo.user.isAdmin

        }

      }

    return (
      <div>
        <BrowserRouter>

          <Navbar className="navmenu">
            <h1 className ="title">JEDDAH WATERFRONT</h1>
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/Resturents">
              Resturents
            </Link>
            <Link className="nav-link" to="/FoodTrucks">
              Food Trucks
            </Link>

            <NavDropdown id="basic-nav-dropdown" title="Account">
              {log}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
            </NavDropdown>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Resturents" render={ ()=> <Restaurantinfo  userinfo={this.props.userinfo} food={this.state.restaurantdata}/>} />
             <Route path="/Foodtrucks" render={ ()=> <Foodtruckinfo userinfo={this.props.userinfo} food={this.state.data}/>} />
             <Route path="/unauthorized" component={unauthorized} />

            <Route
              path="/Foodtruckinfo/:name"
              render={props => (
                <Onefoodtruck
                  {...props}
                  food={
                    this.state.data.length == 0
                      ? 0
                      : this.state.data.filter(ele => {
                          return props.match.params.name == ele.name;
                        })
                  }
                />
              )}
            />
            <Route
              path="/Restaurantinfo/:name/:id"
              render={props => (
                <Onerestaurant
                  {...props}
                  food={
                    this.state.restaurantdata.length == 0
                      ? 0
                      : this.state.restaurantdata.filter(ele => {
                          return props.match.params.name == ele.name;
                        })
                  }
                />
              )}
            />
            <Route
              path="/settings"
              render={() =>
                !getToken() ? <Redirect to="/login" /> : <Changepassword />
              }
            />

            <Route
              path="/login"
              render={() =>
                getToken() ? (
                  <Redirect to="/" />
                ) : (
                  <Signinpage
                    {...this.props}
                    loginHandler={this.props.loginHandler}
                  />
                )
              }
            />

            <Route
              path="/addRestuarant"
              render={() =>
                !access ? (
                  <Redirect to="/unauthorized" />
                ) : (
                  <Admaddresturent/>
                )
              }
            />
            <Route
              path="/editrestuarnt/:id"
              render={(props) =>
                !access ? (
                  <Redirect to="/unauthorized" />
                ) : (
                  <Editrestuarant {...props} />
                )
              }
            />

            <Route
              path="/addfoodtruck"
              render={() =>
                !access ? (
                  <Redirect to="/unauthorized" />
                ) : (
                  <Admaddfoodtruck/>
                )
              }
            />

            <Route
              path="/editfoodtruck/:id"
              render={(props) =>
                !access ? (
                  <Redirect to="/unauthorized" />
                ) : (
                  <Editfoodtruck {...props} />
                )
              }
            />

            <Route
              path="/register"
              render={() =>
                getToken() ? <Redirect to="/" /> : <Registerpage />
              }
            />

            <Route
              exact
              path="/Users/:id"
              render={() =>
                !getToken() ? (
                  <Redirect to="/login" />
                ) : (
                  <Userpage {...this.props} userinfo={this.userinfo()} />
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
