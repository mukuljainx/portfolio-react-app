var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');
var User = require('../models/user');
var Verify = require('./verify');

/* GET home page. */
router.get('/', Verify.verifyOrdinaryUser ,function(req, res, next) {
  if(req.decoded.sub === "")
  {
      isLoggedIn = false;
      res.render('index', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('index',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/cli', Verify.verifyOrdinaryUser ,function(req, res, next) {
    if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('terminal', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('terminal',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('competitions', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('competitions',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }

});

router.get('/about', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('about', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('about',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/termsandconditions', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('terms', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('terms',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/serviceflow', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('service_flow', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('service_flow',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions/astronomy', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('astronomy', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('astronomy',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions/coding', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('coding', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('coding',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions/literature/wrangle', Verify.verifyOrdinaryUser ,function(req, res) {
    Eventx.findOne({'eventName' : 'wrangle'}, function(err, eventx) {
         // if there are any errors, return the error
         if (err)
             return done(err);
         // check to see if theres already a user with that email
         if (eventx){
             if(req.decoded.sub === ""){
                 isLoggedIn = false;
                 res.render('partials/event',{
                     eventDetail : eventx,
                     isLoggedIn : isLoggedIn
                 });
             }
             else {
                 User.findOne({'email' : req.decoded.sub }, function(err, user) {
                     isLoggedIn = user.valid;
                     // if there are any errors, return the error
                     if (err)
                         return done(err);
                     // check to see if theres already a user with that email
                     if (user){
                         delete user._id;
                         res.render('partials/event',{
                             eventDetail : eventx,
                             isLoggedIn : isLoggedIn,
                             user : user,
                         });
                     }
                 });
             }
         }
     });
});

router.get('/competitions/literature/rostrum', Verify.verifyOrdinaryUser ,function(req, res) {
    Eventx.findOne({'eventName' : 'rostrum'}, function(err, eventx) {
         // if there are any errors, return the error
         if (err)
             return done(err);
         // check to see if theres already a user with that email
         if (eventx){
             if(req.decoded.sub === ""){
                 isLoggedIn = false;
                 res.render('partials/event',{
                     eventDetail : eventx,
                     isLoggedIn : isLoggedIn
                 });
             }
             else {
                 User.findOne({'email' : req.decoded.sub }, function(err, user) {
                     isLoggedIn = user.valid;
                     // if there are any errors, return the error
                     if (err)
                         return done(err);
                     // check to see if theres already a user with that email
                     if (user){
                         delete user._id;
                         res.render('partials/event',{
                             eventDetail : eventx,
                             isLoggedIn : isLoggedIn,
                             user : user,
                         });
                     }
                 });
             }
         }
     });
});

router.get('/competitions/quizzing/quest', Verify.verifyOrdinaryUser ,function(req, res) {
    Eventx.findOne({'eventName' : 'quest'}, function(err, eventx) {
         // if there are any errors, return the error
         if (err)
             return done(err);
         // check to see if theres already a user with that email
         if (eventx){
             if(req.decoded.sub === ""){
                 isLoggedIn = false;
                 res.render('partials/event',{
                     eventDetail : eventx,
                     isLoggedIn : isLoggedIn
                 });
             }
             else {
                 User.findOne({'email' : req.decoded.sub }, function(err, user) {
                     isLoggedIn = user.valid;
                     // if there are any errors, return the error
                     if (err)
                         return done(err);
                     // check to see if theres already a user with that email
                     if (user){
                         delete user._id;
                         res.render('partials/event',{
                             eventDetail : eventx,
                             isLoggedIn : isLoggedIn,
                             user : user,
                         });
                     }
                 });
             }
         }
     });
});

router.get('/competitions/robotics', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('roboticsEvents', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('roboticsEvents',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});


router.get('/competitions/management', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('management', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('management',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions/literature', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('literature', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('literature',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/competitions/quizzing', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('quizzing', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('quizzing',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});


router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('contact_us', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('contact_us',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/how-to-reach', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('how-to-reach', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('how-to-reach',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/faq', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('faq', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('faq',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/faq/payment', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('payment_faq', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('payment_faq',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

//router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
//   res.render('contact_us');
//});

router.get('/sponsors', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('sponsors_2k17', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('sponsors_2k17',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/sponsors/2016', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('sponsors_2k16', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('sponsors_2k16',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/team', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('team', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('team',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/schedule', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('schedule', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('schedule',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/workshops', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshop', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshop',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/workshops/web-o-master', Verify.verifyOrdinaryUser ,function(req, res) {
    var eventDetail = require('../public/workshops/web-o-master-data');

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshops/web-o-master', {
          "isLoggedIn" : isLoggedIn,
          eventDetail : eventDetail
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshops/web-o-master',{
                  "isLoggedIn" : isLoggedIn,
                  user : user,
                  eventDetail : eventDetail
              });
          }
      });
  }
});

router.get('/workshops/solar-astronomy', Verify.verifyOrdinaryUser ,function(req, res) {
    var eventDetail = require('../public/workshops/solar');

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshops/web-o-master-x', {
          "isLoggedIn" : isLoggedIn,
          eventDetail : eventDetail
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshops/web-o-master-x',{
                  "isLoggedIn" : isLoggedIn,
                  user : user,
                  eventDetail : eventDetail
              });
          }
      });
  }
});

router.get('/workshops/3d-printer-workshop', Verify.verifyOrdinaryUser ,function(req, res) {
    var eventDetail = require('../public/workshops/3d');

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshops/web-o-master', {
          "isLoggedIn" : isLoggedIn,
          eventDetail : eventDetail
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshops/web-o-master',{
                  "isLoggedIn" : isLoggedIn,
                  user : user,
                  eventDetail : eventDetail
              });
          }
      });
  }
});

router.get('/workshops/vehicle-dynamics', Verify.verifyOrdinaryUser ,function(req, res) {
    res.end('Workshops Cancelled');
});

router.get('/workshops/touch-augmented-realities', Verify.verifyOrdinaryUser ,function(req, res) {
    var eventDetail = require('../public/workshops/touch-augmented-realities');

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshops/web-o-master', {
          "isLoggedIn" : isLoggedIn,
          eventDetail : eventDetail
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshops/web-o-master',{
                  "isLoggedIn" : isLoggedIn,
                  user : user,
                  eventDetail : eventDetail
              });
          }
      });
  }
});

router.get('/workshops/photography', Verify.verifyOrdinaryUser ,function(req, res) {
    var eventDetail = require('../public/workshops/audi');

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshops/web-o-master', {
          "isLoggedIn" : isLoggedIn,
          eventDetail : eventDetail
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('workshops/web-o-master',{
                  "isLoggedIn" : isLoggedIn,
                  user : user,
                  eventDetail : eventDetail
              });
          }
      });
  }
});

router.get('/talks', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('talks', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('talks',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/talks/2016', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('talks_2016', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('talks_2016',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});


router.get('/talks/2015', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('talks_2015', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('talks_2015',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/talks/sangram-ganguly', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('speaker_sangram', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('speaker_sangram',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/talks/dr-shiva-ayyadurai', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('speaker_shiva', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('speaker_shiva',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/talks/shubhranshu-choudhary', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('speaker_shubhranshu', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('speaker_shubhranshu',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/talks/balaji-vishwanathan', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('speaker_balaji', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('speaker_balaji',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/myprofile', Verify.verifyOrdinaryUser ,function(req, res) {
	if(req.decoded.sub === ""){
        isLoggedIn = false;
        res.redirect(301,'/');
    }
    else {
        User.findOne({'email' : req.decoded.sub }, function(err, user) {
            isLoggedIn = user.valid;
            // if there are any errors, return the error
            if (err)
                return done(err);
            // check to see if theres already a user with that email
            if (user){
                res.render('profile',{
                    "isLoggedIn" : isLoggedIn,
                    "user" : user
                });
            }
        });
    }
});

router.get('/competitions/astronomy/astro_hunt', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'astro-hunt'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/astronomy/star_trek', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'star-trek'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/coding/fix_the_bug', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'fix-the-bug'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/coding/iupc', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'iupc'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/coding/iupc_distraction', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'iupc-distraction'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/lfr', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'LFR'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/quadcopter', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'quadcopter'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/roborace', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'roborace'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/robosoccer', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'robosoccer'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/robowar', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'robowar'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/transporter', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'transporter'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/management/sif', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'sif'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        delete user._id;
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/astronomy/armAgeddon', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'armageddon'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
                });
            }
            else {
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    isLoggedIn = user.valid;
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (user){
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            user : user,
                        });
                    }
                });
            }
        }
    });
});

router.get('/wikitolearn' ,function(req, res) {
    res.redirect('https://india2017.wikitolearn.events/');
});


router.get('/mun/pay', Verify.verifyOrdinaryUser ,function(req, res) {

    res.end('Payment link broken, please try after some time.');
    return;

  // if(req.decoded.sub === ""){
  //     isLoggedIn = false;
  //   //   res.render('payment_mun', {
  //   //       "isLoggedIn" : isLoggedIn,
  //   //   });
  // }
  // else {
  //     isLoggedIn = user.valid;
  //     User.findOne({'email' : req.decoded.sub }, function(err, user) {
  //         // if there are any errors, return the error
  //         if (err)
  //             return done(err);
  //         // check to see if theres already a user with that email
  //         if (user){
  //             res.render('payment_mun',{
  //                 "isLoggedIn" : isLoggedIn,
  //                 "user" : {
  //                     name : user.name,
  //                     gender : user.gender,
  //                 }
  //             });
  //         }
  //     });
  // }
});

router.get('/mun', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('mun2017', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('mun2017',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/school-outreach-program', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('school_outreach_program', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('school_outreach_program',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/archive', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('archive', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('archive',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});


router.get('/animation', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('animation', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('animation',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});


module.exports = router;
