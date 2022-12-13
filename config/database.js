const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Database connection successful"))
    .catch((err) => {
      console.log(err.message);
      console.log("Database connection failed");
      process.exit(1);
    });
};
