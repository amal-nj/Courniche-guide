import React, { Component } from 'react'
import Resturentslist from './Resturentslist'
import { Button } from 'react-bootstrap'
import { Link} from "react-router-dom";

export default class Restaurantinfo extends Component {
    render() {
        // console.log(this.props.food[0].pictures[0].picURL)
        // var resta = this.props.food.length > 0 ? this.props.food[0]: null 
        // var resta = !this.props.food ? [] : this.props.food[0]
        // console.log((this.props.food.length > 0) ? this.props.food[0].pictures[0].picURL : null )

        // this.props.food[0]&console.log(this.props.food[0].pictures[0])

                let add=this.props.userinfo.user.isAdmin?<Link to="/addRestuarant"><Button>Add Restuarant</Button></Link>:""
                return (

                    <div>
                        {add}
                        {this.props.food.map( item => {
            //   console.log(this.props.food[0]);
            //   console.log('hi');
              
                    return <Resturentslist id={item._id} isAdmin={this.props.userinfo.user.isAdmin} foodName={item.name} foodImg={item.pictures[0].picURL} foodType={item.type}/>
                  })}
                    </div>
                )
            }
        }
        