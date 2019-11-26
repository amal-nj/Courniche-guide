// START
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
/*
	restaurant schema
*/
const restaurantSchema = new Schema({
	name: String,
  description: String,
	type: String,
	location: { loclong: Number, loclat: Number },
	phones: Number,
 pictures: [{
	  filename: String,
		picURL : String,
	}],
	rate: Number,
	available_table_no: [String],
	reservable: Boolean,
	operation_days: {days:[String],time:String},			// need more detail
	capacity: { tables: Number, seats: Number },
})
/*
	menu schema
*/
const menuSchema = new Schema({
	restaurant_id: {type: ObjectId, ref: "Restaurant"},
	name: String,
	category: [{type:ObjectId,ref:"Menu_categoy"}],
	pictures: [{
		filename: String,
		picURL: String
	}],
	price: Number,
	currency: String,
	description: String,
	discount: String
})
/* Reservation schema */
const reservationSchema = new Schema({
	restaurant_id: { type:ObjectId, ref:"Restaurant"},
	user_id: {type: ObjectId,ref:"User"},
	people: Number,
	menus: [{
		type: ObjectId,ref: "OrderMenu"
	}],
	comment: String,
	reserve_time: {
		timeFrom: Date,
		timeTo: Date
	},
	process_time: Date,
	created_at: Date
},
{ timestamps: true }
); // time review was submitted
module.exports.Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports.Menu = mongoose.model("Menu", menuSchema, "Menu")
module.exports.Reservation = mongoose.model("Reservation", reservationSchema,"Reservation")