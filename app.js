require("dotenv").config({ path: ".env" });
require("./config/database").connect();
const router = require("./routes/router");
const express = require("express");
const app = express();

// used to parse JSON data that comes via POST and PUT request
app.use(express.json());

// used to parse urlencoded data that comes via GET request
app.use(express.urlencoded({ extended: true }));

// router object acts like a middleware
app.get("/", router);
app.get("/getUsers", router);
app.post("/createUser", router);
app.get("/getUser/:userId", router);
app.put("/updateUser/:userId", router);
app.delete("/deleteUser/:userId", router);

module.exports = app;
