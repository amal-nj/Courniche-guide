import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Reviews from './Reviews'

export default class Onerestaurant extends Component {
  
    render() {
        
        var munu = !this.props.food ? [] : this.props.food[0]
        console.log("menu")
        console.log(munu);
        let pic=munu.pictures?munu.pictures[0].picURL:'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'
        return (
            <div>
                <img src={pic} width="100%" height="530"/>
                <h2> {munu.name}</h2>
                <h5> {munu.type}</h5>
                <p> {munu.description} </p>
                <Reviews id={this.props.match.params.id}/>

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