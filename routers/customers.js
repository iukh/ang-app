var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser  = bodyParser.json();
var Customer = require('../models/user.js');

router.get("/customers", async function(req, res){
  const allCustomers = await Customer.find({});
  res.status(200).json(allCustomers);
});

router.get("/customer/:id", async function(req, res){
  const customer = await Customer.find({_id: req.params.id});
  res.status(200).json(customer);
});

router.post("/customer", urlencodedParser, function(req, res){
  const customerData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  const newCustomer = new Customer(customerData);
  res.sendFile(process.cwd() + '/client/main.html');
  newCustomer.save();
});

router.delete("/deleteAllUsers", async function(req, res){
  await Customer.remove(Customer.find({}));
  res.status(200).json({
    message: "All Users are removed"
  });
});

router.delete("/customer/:id", async function(req, res){
    await Customer.remove(Customer.find({_id: req.params.id}));
    res.status(200).json({
      message: "User with id " + req.params.id + " has been removed"
  });
});

module.exports = router;
