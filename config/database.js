const mongoose = require("mongoose");


const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_PRIVATE_URL)
        .then((data) => {
            console.log(`Mongodb connect with server: ${data.connection.host}`);
        })
}

module.exports = connectDatabase;