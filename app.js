const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

app.use(express.json());

const product = require("./routes/productRoute");

app.use("/api/v1", product);

app.get("/", (req, res) => {
    res.send(`<h1>Server is running on port ${process.env.PORT}</h1>`);
});

module.exports = app;