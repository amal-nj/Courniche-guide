import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Onerestaurant extends Component {
  
    render() {

        var munu = !this.props.food ? [] : this.props.food[0]
        console.log(munu);
        return (
            <div>
                <img src={munu.pictures[0].picURL} width="100%" height="530"/>
                <h2> {munu.name}</h2>
                <h5> {munu.type}</h5>
                <p> {munu.description} </p>
                {/* {munu.map(ele => {

                    return <div className="card"> 
                    <img src={ele.pictures[0].picURL} width="auto" height="200"/>
                    <h2> {ele.name}</h2>
                    <h5> {ele.type}</h5>
                    <p>{ele.description}</p>                           
                    </div>

                })} */}

            </div>
        )
    }
}