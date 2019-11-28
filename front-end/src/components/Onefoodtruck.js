import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Onefoodtruck extends Component {
    render() {
        var munu=[]
        if(this.props.food){
            if(this.props.food[0]){

        munu = !this.props.food ? [] : this.props.food[0].menu}
        }
        console.log(munu);
        return (
            <div>
                {munu.map(ele => {

                    return <div className="card">
                        <Card style={{ width: '18rem' }}>
                         
                            <h2>Name: {ele.name}</h2>
                            <h5>Price: {ele.price}</h5>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                })}

            </div>
        )
    }
}