var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser  = bodyParser.json();
var Section = require('../models/section.js');

router.get("/activeSections", async function(req, res){
  const allSections = await Section.find({isActive: true});
  res.status(200).json(allSections);
});

router.get("/plannedSections", async function(req, res){
  const allSections = await Section.find({isActive: false});
  res.status(200).json(allSections);
});

router.post("/section", jsonParser, function(req, res){
  const newSection = new Section(req.body);
  res.status(200).json(newSection);
  newSection.save();
});

router.delete("/deleteAllSections", async function(req, res){
  await Section.remove(Section.find({}));
  res.status(200).json({
    message: "All Sections are removed"
  });
});

router.delete("/section/:id", async function(req, res){
  await Section.remove(Section.find({_id: req.params.id}));
  res.status(200).json({
    message: "Section with id " + req.params.id + " has been removed"
  });
});

router.put("/section/:id/activate", jsonParser, async function(req, res){
  const body = {
    isActive: true
  }
  await Section.updateOne(Section.find({_id: req.params.id}), body);
  res.status(200).json("Section has been updated");
});

router.put("/section/:id/block", jsonParser, async function(req, res){
  const body = {
    isActive: false
  }
  await Section.updateOne(Section.find({_id: req.params.id}), body);
  res.status(200).json({
    message: "Section has been updated"
  })
});

module.exports = router;
