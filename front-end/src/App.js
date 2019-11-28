import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbarmenu from "./components/Navbarmenu";
import Footermenu from "./components/Footermenu";
import Homepage from "./components/Homepage";
import Resturents from "./components/Resturents";
import Foodtrucks from "./components/Foodtrucks";
import Signinpage from "./components/Signinpage";
import { getToken, setToken, logout, setUser, getUser } from "./services/auth";
import axios from "axios";




import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Admaddfoodtruck from "./components/Admaddfoodtruck";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      errorMsg: "",
      isAuthenticated: false,
      hasError: false
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.getHeader = this.getHeader.bind(this);
  }
  
  componentDidMount(){
    console.log("getUser")
    console.log(this.userinfo())
    this.setState(this.userinfo())
  }

  componentDidUpdate(){
    // console.log("update")
    // console.log(this.state)
    // setUser(this.state)
    // console.log("inside loginHandler")
    // console.log(JSON.parse(getUser()))
    console.log(this.state)
  }

  userinfo(){
    return JSON.parse(getUser())
  }

  getHeader() {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      }
    };
  }

  logout = () => {
    logout();
    let data = {};
    //reset everything on logout
    data.isAuthenticated = false;
    data.user = "";
    data.email = "";
    data.password = "";
    //I guess it shouldn't be called loginhandler if we're gonna use it here but it's too late
    this.loginHandler(data);
  };

  loginHandler(userData) {
    this.setState(userData);
    setUser(userData)
  }

  registerHandler = e => {
    axios
      .post("/api/auth/", {})
      .then(response => {})
      .catch();
  };

  render() {
    // let loggedIn=this.state.isAuthenticated?
    // const { match, location, history } = this.props;

    return (
      <div>
        {/* <h1>You are now at {location.pathname}</h1>; */}
        <Navbarmenu
          userinfo={this.state}
          loginHandler={this.loginHandler}
          logout={this.logout}
          getHeader={this.getHeader}
        />
        

        <Footermenu />
      </div>
    );
  }
}
