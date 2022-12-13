const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(conn => console.log(`Database connected: ${conn.connection.host}`))
    .catch(err => {
      console.log(err.message);
      console.log("Database connection failed");
      process.exit(1);
    });
};
