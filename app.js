const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

app.use(express.json());

const cors = require("cors");
app.use(cors());

const product = require("./routes/productRoute");

app.use("/api/v1", product);

app.get("/", (req, res) => {
    res.send(`<h1>Server is running on port ${process.env.PORT}</h1>`);
});

module.exports = app;