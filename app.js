// подключение express
const express = require("express");
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const port = process.env.PORT || 3000;
const app = express();
var User = require('./models/user.js');
var flash = require('connect-flash');
app.use(flash());
const passport = require('passport');
var session = require('express-session');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser  = bodyParser.json();
var debug = require('debug')('mean-angular6:server');

var cors = require('cors')
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use(session({ cookie: { maxAge: 60000 },
  secret: 'woot',
  resave: false,
  saveUninitialized: false})
);

mongoose.connect('mongodb://localhost:27017', function (err, client) {
  if (err)  throw err;
  console.log("Mongo DB has been successfully connected");
});
const customerRouter = require('./routers/customers.js');
const sectionRouter = require('./routers/sections.js');
const articleRouter = require('./routers/articles.js');
const commentRouter = require('./routers/comments.js');
app.use("/api/customerManagement",customerRouter)
app.use("/api/sectionManagement",sectionRouter)
app.use("/api/articleManagement",articleRouter)
app.use("/api/articleManagement",commentRouter)

app.use(express.static(__dirname + "/client"));
//app.use(express.static('/dist'));

app.get("/main", function(req, res){
  res.sendFile(__dirname + '/client/auth.html');
});


app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/main');
});

passport.use(new LocalStrategy(
function(username, password, done) {
  var currentUser = User.findOne({ email: username}, function(err, user) {
    if (err) {
      return done(err);
      console.log('ERROR');
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Profile.findById(id, function(err, user) {
    done(err, user);
  });
});
app.post('/login', jsonParser, passport.authenticate('local'), function(req, res){
  console.log(req.user);
  res.send(req.user);
});


app.listen(port,() => {
  console.log("Server has been started on the port 3000")
});
