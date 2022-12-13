const express = require("express");
const router = express.Router();

const {
  home,
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/routehandlers");

// router object is used to handle incoming requests
router.get("/", home);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.get("/getUser/:userId", getUser);
router.put("/updateUser/:userId", updateUser);
router.delete("/deleteUser/:userId", deleteUser);

module.exports = router;
