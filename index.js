const express = require("express");
const connectToDatabase = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());

// connection to db
connectToDatabase();

// mount api
app.use("/api/v1", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// default route
app.get("/", (req, res) => {
  res.send("Home Page");
});
