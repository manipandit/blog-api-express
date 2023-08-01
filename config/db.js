const mongoose = require("mongoose");

require("dotenv").config();
const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection successful to database");
    })
    .catch((err) => {
      console.log("Couldn't connect to database");
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectToDatabase;
