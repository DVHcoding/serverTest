const express = require("express");
const app = express();
const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });
dotenv.config();

app.use(express.json());

const product = require("./routes/productRoute");

app.use("/api/v1", product);

app.get("/", (req, res) => {
    const PORT = process.env.PORT || 3000; // Use port 3000 as default if PORT is not defined
    res.send(`<h1>Server is running on port ${PORT}</h1>`);
});

module.exports = app;