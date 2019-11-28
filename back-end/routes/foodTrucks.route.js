const FoodTruck = require("../models/FoodTruck");
const Review = require("../models/Review");

const express = require("express");

const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

//get all food trucks data
router.get("/",  (req, res) => {
  FoodTruck.find()
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      return res
        .status(401)
        .json({ error: "error fetching food trucks data", msg: e });
    });
});
//Admin routes: this will need authnication- user who's making the post request must be an admin
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
 
  (req, res) => {
    if (req.user.isAdmin) {
      let foodTruck = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,

        type: req.body.type, //what kind of food is it?
        openHours: req.body.openHours, //ideally this should be a time but for now we'll keep it a string
        //location coordinates which will be taken from google maps
        loclong: req.body.loclong, //longitude
        loclat: req.body.loclat, //latitude
        //this will hold objects that contain order's name, image URL, catagory and price
        menu: req.body.menu //needs adjustments
      };

      //instance of data
      let newTruck = new FoodTruck(foodTruck);

      console.log(newTruck);
      // //save the data
      newTruck
        .save()
        .then(() => {
          return res.json({ message: "food truck created" });
        })
        .catch(e => {
          return res.status(401).json({ error: "error saving user", msg: e });
        });
    } else {
      return res.json({ message: "you're not authrized to view this page" });
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.isAdmin) {
      FoodTruck.findByIdAndDelete(req.params.id)
        .then(() => {
          res.send("food truck deleted");
        })
        .catch(err => res.send(err));
    } else {
      return res.json({ message: "you're not authrized to view this page" });
    }
  }
);

router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.isAdmin) {
      FoodTruck.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
          res.send("resutrant was updated");
        })
        .catch(err => res.send(err));
    } else {
      return res.json({ message: "you're not authrized to view this page" });
    }
  }
);

//end of admin routes

//get the data of a specfic food truck
router.get("/:id", (req, res) => {
  FoodTruck.findById(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      return res
        .status(401)
        .json({ error: "error fetching food trucks data", msg: e });
    });
});
//needs authinication to confirm user's identity
//needs to be rewritten with async await
//post a review to a spcific restuarnt
router.post("/review/:id", (req, res) => {
  let review = new Review({
    user: req.body.user, //should be user id, refrence to the user
    review: req.body.review,
    rating: req.body.rating
  });
  console.log(review);
  review
    .save()
    .then(() => {
      FoodTruck.findById(req.params.id)
        .then(data => {
          data.reviews.push(review);
          FoodTruck.findByIdAndUpdate(req.params.id, data)
            .then(data => {
              res.send(data);
            })
            .catch(e => {
              return res
                .status(401)
                .json({ error: "could not find food trucks data", msg: e });
            });

          // res.send("saved!");
        })
        .catch(e => {
          return res
            .status(401)
            .json({ error: "could not find food trucks data", msg: e });
        });
    })
    .catch(e => {
      return res.status(401).json({ error: "error saving review", msg: e });
    });
});

//get all the reviews posted to a specfic resturant, this path might not be needed
router.get("/review/:id", (req, res) => {
  FoodTruck.findById(req.params.id)
    .populate("reviews")
    .then(data => {
      res.send(data.reviews);
    })
    .catch(e => {
      return res.status(401).json({ error: "error fetching reviewa", msg: e });
    });
});

module.exports = router;
