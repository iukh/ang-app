var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser  = bodyParser.json();
var Comment = require('../models/comment.js');

router.get("/comments", async function(req, res){
  const allComments = await Comment.find({});
  res.status(200).json(allComments);
});

router.get("/article/:articleId/comments", async function(req, res){
  const comments = await Comment.find({articleId: req.params.articleId});
  res.status(200).json(comments);
});

router.post("/comment", jsonParser, async function(req, res){
  const newComment = new Comment(req.body);
  await newComment.save();
  res.status(200).json(newComment);
});

module.exports = router;
