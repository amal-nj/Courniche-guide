import React, { Component } from 'react'
import Foodtruckslist from './Foodtruckslist'
import { Button } from 'react-bootstrap'
import { Link} from "react-router-dom";
export default class Foodtruckinfo extends Component {
    render() {
        let add=this.props.userinfo.user.isAdmin?<Link to="/addfoodtruck"><Button>Add Foodtruck</Button></Link>:""
        return (
            <div>
                {add}
                {this.props.food.map( item => {
     
      
            return <Foodtruckslist id={item._id} isAdmin={this.props.userinfo.user.isAdmin} foodName={item.name} foodImg={item.image} foodType={item.type}/>
          })}
            </div>
        )
    }
}