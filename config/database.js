const mongoose = require("mongoose");


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://dvhcoding:0359123821@ecommerce.ojkcioz.mongodb.net/?retryWrites=true&w=majority&appName=Ecommercev")
        .then((data) => {
            console.log(`Mongodb connect with server: ${data.connection.host}`);
        })
}

module.exports = connectDatabase;