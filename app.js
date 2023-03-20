const express = require('express');
const mongoose = require('mongoose');
const customersRoute = require('./routes/customer');
require("dotenv").config();

const app = express();
const port = 3000;
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use('/api/Customers', customersRoute);

// connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongodb atlas");
    }).catch(error => {
        console.log(error.message);
    });

// start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});