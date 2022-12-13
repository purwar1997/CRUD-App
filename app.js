require("dotenv").config({ path: ".env" });
require("./config/database").connect();
const router = require("./routes/routes");
const express = require("express");
const app = express();

// use() method is used to mount middleware on top of a path
// if the path is not mentioned, default path is set to '/' (root path)

// following middlewares will be invoked for every request to the app

// used to parse JSON data that comes via POST and PUT request
app.use(express.json());

// used to parse urlencoded data that comes via GET request
app.use(express.urlencoded({ extended: true }));

// router object acts like a middleware
app.use("/", router);

module.exports = app;
