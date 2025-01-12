const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");

const app = express();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// Connect to Mongo DB
try {
  mongoose.connect(DB_URL);
  console.log("Connect to Mongo DB Successfully");
} catch (error) {
  console.log("DB Connection Failed");
}

// Set CORS policy
app.use(cors({ origin: BASE_URL, credentials: true }));

// Enable JSON parsing for requests
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to SE NPRU Blog Restful API</h1>");
});

// Static file serving (uploads)
app.use("/uploads", express.static(__dirname + "/uploads"));

// Use Router for user and post
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/post", postRouter);

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
