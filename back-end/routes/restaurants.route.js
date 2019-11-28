const Restaurant = require("../models/Restaurant").Restaurant
const Review = require("../models/Review");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// get all food trucks data
router.get("/", (req, res) => {
    console.log("inside get")
  Restaurant.find()
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      return res
        .status(401)
        .json({ error: "Error fetching restaurant data", msg: e });
    });
});
// Admin routes
router.post(
   "/add", //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if(true){
      let Restauranta = {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        phones: req.body.phones,
        sociallinks: [{
          type: req.body.type,
          link: req.body.link
        }],
       pictures: [{
          filename: req.body.filename,
          picURL : req.body.picURL,
        }],
        available_table_no: req.body.available_table_no,
        reservable: req.body.reservable,
        operation_days: req.body.operation_days,
        capacity: req.body.capacity
      }
      // instance of data
      let newRestaurant = new Restaurant(Restauranta);
      console.log(newRestaurant);
      // save the data
      newRestaurant
        .save()
        .then(() => {
          return res.json({ message: "Restaurant created" });
        })
        .catch(e => {
          return res.status(401).json({ error: "Error saving user", msg: e });
        });
  }
  else {
    return res.json({ message: "you're not authrized to view this page" });
  }

}
 
);
router.delete(
  "/:id",  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.isAdmin) {
      Restaurant.findByIdAndDelete(req.params.id)
        .then(() => {
          res.send("deleted");
        })
        .catch(err => res.send(err));
    } else {
      return res.json({ message: "You're not authrized to view this page" });
    }
  }
);
router.put("/edit/:id", 
passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.isAdmin) {
      let Restauranta = {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        phones: req.body.phones,
        sociallinks: [{
          type: req.body.type,
          link: req.body.link
        }],
       pictures: [{
          filename: req.body.filename,
          picURL : req.body.picURL,
        }],
        available_table_no: req.body.available_table_no,
        reservable: req.body.reservable,
        operation_days: req.body.operation_days,
        capacity: req.body.capacity,
        reviews: req.body.reviews
      }
      Restaurant.findByIdAndUpdate(req.params.id, Restauranta)
        .then(() => {
          res.send("updated");
        })
        .catch(err => res.send(err));
    } else {
      return res.json({ message: "You're not authrized to view this page" });
    }
  }
);
// end of admin routes
// get the data of a specfic restaurant
router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      return res
        .status(401)
        .json({ error: "Error fetching restaurant data", msg: e });
    });
});
// needs authinication to confirm user's identity
// needs to be rewritten with async await
// post a review to a spcific restuarnt
router.post("/review/:id", passport.authenticate("jwt", { session: false }),(req, res) => {

  let review = new Review({
    user: req.user, // should be user id, refrence to the user
    review: req.body.review,
    rating: req.body.rating
  });
  console.log(review);
  review
    .save()
    .then(() => {
      Restaurant.findById(req.params.id)
        .then(data => {
          console.log("this is data")
          console.log(data)
          data.reviews.push(review);
          Restaurant.findByIdAndUpdate(req.params.id, data)
            .then(data2 => {
                console.log("really found it")
              res.send(data2);
            })
            .catch(e => {
              return res
                .status(401)
                .json({ error: "Could not find restaurant 1", msg: e });
            });
          // res.send("saved!");
        })
        .catch(e => {
          return res
            .status(401)
            .json({ error: "Could not find restaurant 2", msg: e });
        });
    })
    .catch(e => {
      return res.status(401).json({ error: "Error saving review", msg: e });
    });
});
router.get("/review/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .populate("reviews")
    .then(data => {
      res.send(data.reviews);
    })
    .catch(e => {
      return res.status(401).json({ error: "Error fetching reviews", msg: e });
    });
});

router.delete("/review/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  
  Review.findByIdAndDelete(req.params.id)
    .then(data => {
      res.send("review deleted");
    })
    .catch(e => {
      return res.status(401).json({ error: "Error deleteing review", msg: e });
    });
});
module.exports = router;