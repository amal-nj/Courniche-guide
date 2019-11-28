import React, { Component } from 'react';
import axios from 'axios';
import { getToken, setToken, logout, setUser, getUser } from "../services/auth";
import { Redirect } from 'react-router-dom'

export default class Admaddfoodtruck extends Component {
  constructor(props) {
    super(props);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    // this.onChangType= this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeType=this.onChangeType.bind(this)
    this.state = {
      image: '',
      name: '',
      type: '',
      description: '',
      location: '',
      foodtrucknew: [],
      redirect: false
    }
  }
  // componentDidMount() {
  //   axios.get('http://localhost:5300/api/foodtrucks'+this.props.match.params.id)
  //     .then(response => {
  //       this.setState({
  //         name: response.data.name,
  //         description: response.data.description,
  //         location: response.data.location,
  //       })   
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  onChangeImage(e){
    this.setState({
      image: e.target.value
    })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const addfoodtruck = {
      image: this.state.image,
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      location: this.state.location,
    }
    console.log(addfoodtruck);
    axios.post('http://localhost:5300/api/foodTrucks/add', addfoodtruck, {
      headers :{
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${getToken()}`
      }
    })
      .then(res => document.getElementById("away2").click())
      .catch(err=>{
        logout()
        this.setState({redirect: true})
      
       
      })
  }
  render() {

    return (
    <div>
    <a href="/foodtrucks" style={{ display: "none" }} id="away2"></a>;

      <h3>Add New Food Truck</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Image URL: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group"> 
          <label>Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
              />
        </div>
        {/* <div className="form-group"> 
          <label>Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div> */}
        {/* <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>*/}
        <div className="form-group"> 
          <input type="submit" value="Add" className="btn btn-primary" onClick={this.onSubmit} />
        </div>
      </form>
      {this.state.redirect == true &&
                    <Redirect to={{
                        pathname: '/login',
                    }} />}
    </div>
    )
  }
}