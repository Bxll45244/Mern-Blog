const express = require("express");
const cors = require("cors");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;

app.use(cors({ origin: BASE_URL, credentials: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.listen(PORT, () => {
  console.log("Ser is running http://localhost:" + PORT);
});
