const express = require('express');
const router = express.Router();
const Customer = require("../models/customer");

// GET CUSTOMER BY BARCODE
router.get("/GetCustomerByBarcode", async (req, res) => {
    const customer = await Customer.findOne({ barcode: req.body.barcode });
    if (!customer) {
        res.status(404).send({ "message": "Customer not found." });
    } else {
        res.send(customer);
    }
});

module.exports = router;