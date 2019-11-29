const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
 user : { type: Schema.Types.ObjectId, ref: "User"},
 review: {type: String, required: true },
 rating: Number


},
{ timestamps: true })//time review was submitted

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review