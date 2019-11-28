const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reserveSchema = new Schema({
 user : { type: Schema.Types.ObjectId, ref: "User", required: false },
 time: {type: String, require: true},//will be a string for now--> should be upsated to date or time later

},
{ timestamps: true })

const Reservation = mongoose.model('Reservation', reserveSchema)
module.exports = Reservation