require('dotenv').config()
const mongoose = require("mongoose");

const express = require('express')
const PORT = process.env.PORT || 5300
const server = express()

const session = require('express-session')
//jwt and passports
const jwt = require('jsonwebtoken')
const passport = require('passport')
//mongoose connection
const mongooseConnect = require('./config/mongodb')


// uplaoud image

const path = require("path");
const multer = require("multer");
const cors = require("cors");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");


server.use(cors());

//Connect to DB
const mongoURI =
process.env.DB_CONNECTION;

const conn = mongoose.createConnection(mongoURI);
let gfs;

// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads");
//   console.log("Connection Successful");
// });

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.DB_CONNECTION,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

server.post("/", upload.single("img"), (req, res, err) => {
  res.send(req.files);
});

server.get("/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists"
      });
    }

    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image"
      });
    }
  });
});


// //end of upload image

//allows json to be sent to via request express
server.use(express.json())

//create session for passport
server.use(session({
 secret : "test",
 resave : false,
 saveUninitialized : true
}))

server.use(passport.initialize())
server.use(passport.session())


//routes
server.use('/api/auth', require('./routes/auth.route'))
server.use('/api/restaurants', require('./routes/restaurants.route'))//might need something for authntication later

server.use('/api/foodtrucks', require('./routes/foodTrucks.route'))//might need something for authntication later


//cannot find route
server.use('*', (request, response) => {
 response.status(404).json({message : "Data not found!"})
})

server.listen(PORT, () => console.log(`connected to ${PORT}`))
