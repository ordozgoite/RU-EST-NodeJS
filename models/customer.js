const mongoose = require('mongoose');

// CUSTOMER SCHEMA
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    barcode: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});

module.exports = new mongoose.model("Customer", CustomerSchema);