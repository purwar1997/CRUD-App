const express = require("express");
const router = express.Router();
const { home, getUsers } = require("../controllers/routehandlers");

// router object is used to handle incoming requests
router.get("/", home);
router.get("/getUsers", getUsers);

module.exports = router;
