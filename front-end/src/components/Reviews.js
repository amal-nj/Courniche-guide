import React, { Component } from "react";
import axios from "axios";
import { getToken, setToken, logout, setUser, getUser } from "../services/auth";
import { Button } from 'react-bootstrap'

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.postReview = this.postReview.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      reviews: [],
      update: true
    };
  }
  userinfo() {
    return JSON.parse(getUser());
  }
  componentDidMount() {
    this.setState({ reviews: [] });
  }
  componentDidUpdate() {
    axios
      .get(`http://localhost:5300/api/restaurants/review/${this.props.id}`)
      .then(res => {
        let reviews = res.data; //.map(reviewModel => {
        //   return reviewModel.review;
        // });
        console.log(reviews);
        if (JSON.stringify(reviews) != JSON.stringify(this.state.reviews)) {
          this.setState({ reviews });
        }
      })
      .catch(err => console.log(err));
  }
  delete(id) {
    let review = { review: document.getElementById("review").value };
    document.getElementById("review").value = "";
    axios.delete(
        `http://localhost:5300/api/restaurants/review/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      .then(data => {
        this.setState({ update: !this.state.update });
      })
      .catch(err => console.log(err));
  }
  postReview(e) {
    e.preventDefault();
    let review = { review: document.getElementById("review").value };
    document.getElementById("review").value = "";
    axios
      .post(
        `http://localhost:5300/api/restaurants/review/${this.props.id}`,
        review,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      .then(data => {
        this.setState({ update: !this.state.update });
      })
      .catch(err => console.log(err));
  }
  render() {
    let reviewsArr = this.state.reviews.map(review => {
      let a = review.review;
      let you = "";
      let name = "Anonymous";
      if (this.userinfo().user) {
        name = review.user == this.userinfo().user._id ?"You":"Anonymous";
        you =
          review.user == this.userinfo().user._id ? (
            <Button
              onClick={e => {
                e.preventDefault();
                this.delete(review._id);
              }}
            >
              Delete
            </Button>
          ) : (
            ""
          );
        console.log("here");
      }
      return (
        <div>
          <br />
          <h4>{name}</h4>
          <p>{a}</p>
          {you}
        </div>
      );
    });
    return (
      <div>
        <h3>Reviews</h3>
        <textarea rows="7" cols="230" id="review"></textarea>
        <Button onClick={this.postReview}>Submit Review</Button>
        <div>{reviewsArr}</div>
      </div>
    );
  }
}
