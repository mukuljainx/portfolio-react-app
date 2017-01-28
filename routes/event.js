var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Eventx = require('../models/event');
var User = require('../models/user');
var UserEvent = require('../models/userevent');
var Verify = require('./verify');
var Robotics = require('../models/robotics');
var Contact = require('../models/contact');
var Ecell = require('../models/ecell');
var Quiz = require('../models/quiz');
var Literary = require('../models/literary');
var Astronomy = require('../models/astronomy');
var Cybros = require('../models/cybros');
var Sif = require('../models/sif');
var Workshop = require('../models/workshop');
var mongoose = require('mongoose');
var EventURL = require('../config/eventURL')
var authUser = require('../config/authuser')

router.post('/add', function(req, res) {

    var eventx = new Eventx();

    eventx.imageLink         = req.body.imageLink;
    eventx.registerLink      = req.body.registerLink;
    eventx.register0         = req.body.register0;
    eventx.register1         = req.body.register1;
    eventx.paymentLink       = req.body.paymentLink;
    eventx.payment0          = req.body.payment0;
    eventx.payment1          = req.body.payment1;
    eventx.memberUpperLimit  = req.body.memberUpperLimit;
    eventx.memberLowerLimit  = req.body.memberLowerLimit;
    eventx.clubName          = req.body.clubName;
    eventx.eventName         = req.body.eventName;
    eventx.displayName       = req.body.displayName;
    eventx.eventDate         = req.body.eventDate;
    eventx.eventVenue        = req.body.eventVenue;
    eventx.prizeWorth        = req.body.prizeWorth;
    eventx.synopsis          = req.body.synopsis;
    eventx.eventDescription  = req.body.eventDescription;
    eventx.rules             = req.body.rules;
    eventx.judges            = req.body.judges;
    eventx.mentors           = req.body.mentors;
    eventx.sponsors          = req.body.sponsors;
    eventx.query             = req.body.query;


  eventx.save(function(err) {
    if (err){
        res.send(err);
      }
     else
        res.json({ message: 'value created!' });
  })

});


router.post('/competition', function(req, res) {
    console.log(req.body);
    Eventx.findOne({'eventName' : req.body.eventName}, function(err, result){
            if(err){
                console.log(err);
                return;
            }
            else if(result){
                res.json(result);
                return;
            }
            else{
                res.json({'response' : false});
            }
    })
});
//user registration

router.post('/register', Verify.verifyOrdinaryUser, function(req, res) {
    var robotics   = new Robotics();
    var ecell      = new Ecell();
    var quiz       = new Quiz();
    var literary   = new Literary();
    var astronomy  = new Astronomy();
    var cybros     = new Cybros();
    var user       = new User();
    var userEvent  = new UserEvent();


    switch(req.body.clubName) {
        case "astronomy":
            eventx = astronomy;
            break;
        case "coding":
            eventx = cybros;
            break;
        case "literature":
            eventx = literary;
            break;
        case "robotics":
            eventx = robotics;
            break;
        case "management":
            eventx = ecell;
            break;
        case "quizzing":
            eventx = quiz;
            break;
    }

        eventx.team = req.body.userDetails;
        eventx.eventName = req.body.eventName;
        eventx.teamEmail = req.body.userDetails[0].email;
        eventx.teamNumber = req.body.userDetails[0].phoneNumber;
        eventx.payment = {
            status   : 'TXN_NOT_DONE',
            order_id : 'undefined'
        }
        var emails = [];
        for(var i=0; i<req.body.userDetails.length; i++ ){
            emails.push(req.body.userDetails[i].email);
        }
        // bulk
        var bulk = user.collection.initializeOrderedBulkOp();
        for(var i=0; i < emails.length; i++){
            bulk.find({'email': emails[i]}).update({$push: {events: req.body.eventName}});
        }
        bulk.execute();
        var bulk = userEvent.collection.initializeOrderedBulkOp();
        for(var i=0; i < emails.length; i++){
            bulk.find({'email': emails[i]}).upsert().update(
                {
                    $push : {events: req.body.eventName},
                    $set  : {email : emails[i]}
                }
            );
        }

        bulk.execute(function(err, docs){
            eventx.save(function(err) {
                if (err){
                    return done(err);
                }
                else{
                    res.json({ "response" : true });
                }
            })
        });
});

router.post('/register/sif', Verify.verifyOrdinaryUser, function(req, res) {
    var sif = new Sif();
    sif.detail = req.body.sifDetails;
    sif.teamEmail  = req.body.sifDetails.representativeEmail;
    sif.teamNumber  = req.body.sifDetails.representativeContact;
    sif.payment   = {
        status   : "TXN_NOT_DONE",
        amount   : 500,
    },
    sif.save(function(err) {
        if (err){
            console.log(err);
            res.json({ "response" : false });
            return;
        }
        else{
            res.json({ "response" : true });
            return;
        }
    })
});

router.post('/workshop/register', Verify.verifyOrdinaryUser, function(req, res) {
    var user       = new User();
    var userEvent  = new UserEvent();
    var workshop   = new Workshop();

    workshop.team = req.body.userDetails;
    workshop.eventName = req.body.eventName;
    workshop.teamEmail = req.body.userDetails[0].email;
    workshop.teamNumber = req.body.userDetails[0].phoneNumber;
    workshop.payment = {
        status   : 'TXN_NOT_DONE',
        order_id : 'undefined'
    }

    var emails = [];
    for(var i=0; i<req.body.userDetails.length; i++ ){
        emails.push(req.body.userDetails[i].email);
    }
    // bulk

    var bulk = user.collection.initializeOrderedBulkOp();
    for(var i=0; i < emails.length; i++){
        bulk.find({'email': emails[i]}).update({$push: {events: req.body.eventName}});
    }

    bulk.execute();
    var bulk = userEvent.collection.initializeOrderedBulkOp();
    for(var i=0; i < emails.length; i++){
        bulk.find({'email': emails[i]}).upsert().update(
            {
                $push : {events: req.body.eventName},
                $set  : {email : emails[i]}
            }
        );
    }

    bulk.execute(function(err, docs){
        workshop.save(function(err) {
            if (err){
                return done(err);
            }
            else{
                res.json({ "response" : true });
            }
        })
    });
});

router.get('/edit', Verify.verifyOrdinaryUser, function(req, res) {
    if(req.decoded.sub === ""){
        res.end("You are not authorized.");
        return;
    }
    if(authUser.dev.indexOf(req.decoded.sub) === -1){
        res.end("You are not authorized.");
        return;
    }
     else{
         if(EventURL[req.query.event] === undefined){
             res.end('Please Check the link once again there may some typo in event name');
             return;
         }
         Eventx.findOne({'eventName' : req.query.event}, function(err, eventx){
             if(err){
                 console.log(err);
                 return;
             }
             else{
                 User.findOne({'email' : req.decoded.sub }, function(err, user) {
                     // if there are any errors, return the error
                     if (err){
                         return done(err);
     	               }
                     // check to see if theres already a user with that email
                     if (user){
                         var nameArray = ["imageLink" ,"memberUpperLimit" , "memberLowerLimit","clubName", "eventName", "displayName", "eventDate", "eventFee" ,"eventVenue", "prizeWorth", "sponsor", "synopsis", "eventDescription" ,"rules", "judges", "query", "sponsors"];
                         res.render('partials/event-edit',{
                             eventData : eventx,
                             nameArray : nameArray,
                             isLoggedIn : true,
                             user : user,
                         });
                     }
                 });
             }
         })
     }
})

router.post('/update', Verify.verifyOrdinaryUser, function(req, res) {
    if(authUser.dev.indexOf(req.decoded.sub) === -1){
         res.end("You are not authorized.");
         return;
     }
     else{

        var eventx = {};
        for (name in req.body){
            eventx[name] = req.body[name];
        }


         Eventx.findOneAndUpdate({'eventName' : eventx['eventName']}, eventx, {new: true}, function(err, eventx){
             if(err){
                 console.log(err);
                 res.json({response : false})
                 return;
             }
             else{
                 console.log(eventx);
                 res.json({response : true})
             }
         })
     }
})

router.post('/contact', Verify.verifyOrdinaryUser, function(req, res) {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.query = req.body.query;

    contact.save(function(err){
        if(err){
            console.log(err);
            res.json({response : false});
            return;
        }
        else{
            res.json({response : true});
            return;
        }
    })
})
module.exports = router;
