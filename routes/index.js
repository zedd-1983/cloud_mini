var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = require('url');

mongoose.connect('localhost:27017/scriptDb');
var Schema = mongoose.Schema;

var scriptSchema = new Schema({
  Name: String,
  Script: String
});

var theScript = mongoose.model('script', scriptSchema);
var humidity = 0;

router.get('/', function(req, res, next) {
//  theScript.find()
//      .then(function(doc) {
  //      console.log("Array length is: " + doc.length);
        res.render('index', {title: "My Page"});
  //    });
});



router.get('/getHumidity', function(req, res, next) {
  //  console.log(req.url);
    var q = url.parse(req.url, true);
//    console.log(q);
    console.log(q.query.myName);
    console.log(q.query.myNum);
  res.send("" + humidity++);
});

router.post('/login', function(req, res, next) {
  res.render('loginResponse', {title: "Login status", yourUsername: req.body.username, yourPassword: req.body.passwd});
});


module.exports = router;
