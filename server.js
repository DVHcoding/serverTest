const app = require("./app");

const dotenv = require("dotenv");
// dotenv.config({ "path": "./config/config.env" });
dotenv.config();

const connectDatabase = require("./config/database");

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server is working on http:localhost:${process.env.PORT}`);
});

app.send(`<h1>${process.env.PORT}</h1>`);