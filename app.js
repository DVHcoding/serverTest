const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

const product = require("./routes/productRoute");

app.use("/api/v1", product);

app.use("/", (req, res) => {
    res.send(`<h1>${process.env.PORT}</h1>`);
})

module.exports = app;