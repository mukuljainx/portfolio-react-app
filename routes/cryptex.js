var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Cryptex = require('../models/cryptex')
var Verify = require('./verify');
var authUser = require('../config/authuser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
var fs = require('fs');

router.get('/', Verify.verifyOrdinaryUser ,function(req, res) {

  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('cryptex', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          if(user.cryptexLevel === undefined) var newUser = true;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('cryptex',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  },
                  newUser : newUser,
              });
          }
      });
  }
});

router.get('/play', Verify.verifyOrdinaryUser ,function(req, res) {
    var limitLevel = 30;
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.redirect('/cryptex');
      return
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              if(user.cryptexLevel === undefined){
                  console.log('level undefined');
                  res.redirect('/cryptex');
                  return;
              }
              if(user.cryptexLevel === limitLevel){
                  res.render('cryptex_limit',{
                      isLoggedIn : isLoggedIn,
                      user : user,
                  });
              }
              Cryptex.findOne({'level' : user.cryptexLevel}, function(err,doc){
                  if (err){
                      console.log(err);
                      res.end('Internal server Error')
                      return;
                  }
                  else{
                      res.render('cryptex_question',{
                          isLoggedIn : isLoggedIn,
                          user : user,
                          doc : doc,
                      });
                  }
              })
          }
      });
  }
});


router.get('/leaderboard', Verify.verifyOrdinaryUser ,function(req, res) {
    var usersProjection = {
        _id: false,
        name           : true,
        cryptexLevel   : true,
        college        : true,
    };
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      User.find({'cryptexLevel' : { $exists : true}}, usersProjection, {sort : {'cryptexLevel' : -1, 'cryptexTime' : 1 }}, function(err,results){
          res.render('cryptex_leaderboard', {
              "isLoggedIn" : isLoggedIn,
              results : results
          });
      })
      return
  }
  else {
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          isLoggedIn = user.valid;
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              //seatch user db again to create leaderboard
              User.find({'cryptexLevel' : { $exists : true}}, usersProjection, {sort : {'cryptexLevel' : -1, 'cryptexTime' : 1 }}, function(err,results){
                  res.render('cryptex_leaderboard',{
                      isLoggedIn : isLoggedIn,
                      user : user,
                      results : results
                  });
              })
          }
      });
  }
});

router.get('/dashboard', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    if(!isFinite(req.query.level)){
        res.end('something wrong')
        return;
    }
    if(req.decoded.sub === ""){
        isLoggedIn = false;
        res.render('cryptex_dashboard', {
            "isLoggedIn" : isLoggedIn,
        });
        return
    }
    else {
        User.findOne({'email' : req.decoded.sub }, function(err, user) {
            isLoggedIn = user.valid;
        // if there are any errors, return the error
        if (err)
          return done(err);
        // check to see if theres already a user with that email
        if (user){
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
            Cryptex.findOneAndUpdate({'level' : req.query.level},{$set : {'level' : req.query.level}}, options, function(err, doc){
                if (err) throw err;
                else{
                    res.render('cryptex_dashboard',{
                        isLoggedIn : isLoggedIn,
                        user : user,
                        levelNumber : req.query.level,
                        doc : doc
                    });
                }
            })
      }
      });
}
});


router.post('/editlevel/image/*', Verify.verifyOrdinaryUser, multipartMiddleware ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    if(!isFinite(req.params['0'])){
        res.end('something wrong')
        return;
    }
    var level = req.params['0'];
    var tempPath = req.files.file.path;
    var ext = path.extname(req.files.file.name);
    relativePath = 'public/media/cryptex/'
    targetPath = path.resolve(relativePath + req.files.file.originalFilename);
    fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
        Cryptex.findOneAndUpdate({'level' : req.params['0']}, {$set : {'image' : relativePath + req.files.file.originalFilename}},{new: true}, function(err,doc){
            console.log("Upload completed!");
        })
    });
    res.end('se');
});

router.post('/editlevel/question', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    var update = {$set : {'question' : req.body.question, 'answer' : req.body.answer} };
    var options = {new: true};
    Cryptex.findOneAndUpdate({'level' : req.body.level}, update , options, function(err,doc){
        if (err) throw err;
        else {
            console.log("Upload completed!");
            res.json({response : true});
            return;
        }
    })
});

router.post('/startthegame', Verify.verifyOrdinaryUser ,function(req, res) {
    var timestamp = + new Date();
    User.findOneAndUpdate({'email' : req.decoded.sub }, {'cryptexLevel' : 1, 'cryptexTime' : timestamp}, {upsert : true, 'new' : true} ,function(err, user) {
        if (err){
            console.log(err);
            res.json({response : false});
            return;
        }
        // check to see if theres already a user with that email
        if (user){
            res.json({response : true});
            return;
        }
    });
});

router.post('/submitanswer', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub === ""){
        res.json({response : false})
        return;
    }
    else {
        User.findOne({'email' : req.decoded.sub }, function(err, user) {
            if(err){
                console.log(err);
                res.json({response : false});
                return;
            }
            if(user){
                Cryptex.findOne({'level' : user.cryptexLevel}, function(err, doc){
                    if(err){
                        console.log(err);
                        res.json({response : false});
                        return;
                    }
                    else{
                        if(doc.answer.toLowerCase() === req.body.answer.toLowerCase()){
                            var newLevel = user.cryptexLevel + 1;
                            var timestamp = + new Date();
                            User.findOneAndUpdate({'email' : req.decoded.sub}, {'cryptexLevel' : newLevel, 'cryptexTime' : timestamp}, {'new' : true}, function(err,user){
                                res.json({response : true});
                                return;
                            })
                        }else{
                            res.json({response : false});
                            return;
                        }
                    }
                })
            }
        })
    }
});


module.exports = router;
