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

passport.use(new LocalStrategy({
  usernameField: 'login_email',
  passwordField: 'login_password'
},
function(username, password, done) {
  console.log('starting search');
  var currentUser = User.findOne({ email: username}, function(err, user) {
    if (err) { return done(err); console.log('ERROR'); }
    if (!user) {
      console.log('User Not Found with username '+ username);
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      console.log('Not valid password'+ password);
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
));
//ля того, чтобы сохранять или доставать пользовательские данные из сессии, паспорт использует функции `passport.serializeUser()` и `passport.deserializeUser()`.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Profile.findById(id, function(err, user) {
    done(err, user);
  });
});
app.post('/login', urlencodedParser, passport.authenticate('local'), function(req, res){
  if (req.user.isAdmin) {
    res.redirect('/admin');
  } else
  res.redirect('/info');
});
app.get('/info',function(req, res){
  res.sendFile(__dirname + '/client/main.html');
} );
app.get('/admin',function(req, res){
  res.sendFile(__dirname + '/client/admin.html');
} );


app.listen(port,() => {
  console.log("Server has been started on the port 3000")
});
