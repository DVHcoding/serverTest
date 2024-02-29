const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

const product = require("./routes/productRoute");

app.use("/api/v1", product);


module.exports = app;