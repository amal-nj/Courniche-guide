const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    avatar: {type:String},
    firstName: { type: String},
    lastName: { type: String},
    phone: {type: Number},
    reservations: [],//[{ type: Schema.Types.ObjectId, ref: "Reservation" }],
    //for future edits this should hold the date that this restuarant was last visited by the user
    restHistory: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],//this will hold a refrence to all the restuarants that the user have visited
    truckHistory: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
  },
  { timestamps: true }
);

userSchema.pre("save", function(next) {
  let user = this;

  if (user.password && user.isModified("password")) {
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
      if (err) {
        return next();
      }

      user.password = hash;
      next();
    });
  }
});

userSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {
  bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
    if (err) {
      return cb(err);
    }
    return cb(null, response);
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
