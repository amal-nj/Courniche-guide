const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    image: String, //this will be a URL to the foodtruck's logo/image
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review"}],
    type: String,//what kind of food is it?
    openHours: String,//ideally this should be a time but for now we'll keep it a string
    //location coordinates which will be taken from google maps 
    loclong: Number,//longitude
    loclat: Number,//latitude
    //this will hold objects that contain order's name, image URL, catagory and price
    menu:[]
  },
  { timestamps: true }
); //time review was submitted

const FoodTruck = mongoose.model("FoodTruck", truckSchema);
module.exports = FoodTruck;
