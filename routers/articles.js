var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser  = bodyParser.json();
var Article = require('../models/article.js');

router.get("/articles", async function(req, res){
  const allArticles = await Article.find({});
  res.status(200).json(allArticles);
});

router.get("/section/:sectionId/articles", async function(req, res){
  const articles = await Article.find({sectionId: req.params.sectionId});
  res.status(200).json(articles);
});

router.get("/article/:id", async function(req, res){
  const articles = await Article.find({_id: req.params.id});
  res.status(200).json(articles);
});

router.post("/addarticle", jsonParser, async function(req, res){
  console.log("started create server");
  const newArticle = new Article(req.body);
  console.log(newArticle);
  res.status(200).json(newArticle);
  await newArticle.save();
});

router.delete("/deleteAllArticles", async function(req, res){
  await Article.remove(Article.find({}));
  res.status(200).json({
    message: "All Articles are removed"
  });
});

router.delete("/article/:id", async function(req, res){
  await Article.remove(Article.find({_id: req.params.id}));
  res.status(200).json({
    message: "Article with id " + req.params.id + " has been removed"
  });
});

router.put("/article/:id", jsonParser, async function(req, res){
  await Article.updateOne(Article.find({_id: req.params.id}),req.body);
  res.status(200).json("article has been updated");
});

module.exports = router;
