require("dotenv").config({ path: ".env" });
require("./config/database").connect();
const router = require("./routes/router");
const express = require("express");
const app = express();

// router object acts like a middleware
app.get("/", router);
app.get("/getUsers", router);

module.exports = app;
