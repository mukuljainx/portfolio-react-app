var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');
var User = require('../models/user');
var Contact = require('../models/contact');
var UserEvent = require('../models/userevent');
var Verify = require('./verify');
var Sif = require('../models/sif');
var Robotics = require('../models/robotics');
var Ecell = require('../models/ecell');
var Quiz = require('../models/quiz');
var Literary = require('../models/literary');
var Astronomy = require('../models/astronomy');
var Workshop = require('../models/workshop');
var Cybros = require('../models/cybros');
var authUser = require('../config/authuser');
var PaymentDB = require('../models/payment');
var PaymentMUN = require('../models/paymentMUN');
var PaymentSIF = require('../models/paymentSIF');
var EventURL = require('../config/eventURL');
var mongoose_csv = require('mongoose-csv');



router.get('/sif/startup', Verify.verifyOrdinaryUser ,function(req, res) {
    var allowedUser = authUser.ecell;
    var poc   = authUser.poc;


    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }
    Sif.find({},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
	               }
                // check to see if theres already a user with that email
                if (user){
                    res.render('partials/startup',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});

router.get('/sif/startup/payments', Verify.verifyOrdinaryUser ,function(req, res) {
    var allowedUser = authUser.ecell;
    var poc   = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }
    PaymentSIF.find({},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
	               }
                // check to see if theres already a user with that email
                if (user){
                    var responseData = [];
                    for(var i=0; i<results.length; i++){
                        responseData[i] = {
                            name : results[i].name,
                            status : results[i].status
                        }
                    }
                    res.json(responseData);
                }
            });
        }
    });
});

router.get('/mun/payments', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;
    var allowedUser = authUser.mun;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }
     else{
        PaymentMUN.find({},function (err, results) {
            if (err){
                return console.error(err);
            }
            else{
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    // if there are any errors, return the error
                    if (err){
                        return done(err);
    	               }
                    // check to see if theres already a user with that email
                    if (user){

                        var accommodation_x = 0;
                        var delegate_x = 0;
                        var ip_x = 0;


                        for(var i=0; i<results.length; i++){
                            if(results[i].email === '123@123.co' || results[i].email === 'jainmukul1996@gmail.com' || results[i].email === undefined) continue;
                            if(results[i].status === 'TXN_SUCCESS'){
                                if(results[i].type === 'accommodation') accommodation_x++;
                                if(results[i].type === 'delegate') delegate_x++;
                                if(results[i].type === 'ip') ip_x++;
                            }
                        }



                        res.render('partials/mun',{
                            results : results,
                            isLoggedIn : true,
                            user : user,
                            accommodation_x : accommodation_x,
                            delegate_x : delegate_x,
                            ip_x : ip_x,
                        });
                    }
                });
            }
        });
    }
});


router.get('/participants/*', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    var allowedUser = ['jainmukul1996@gmail.com'];
    var paymentUser = poc.slice(0);

    if(EventURL[req.query.event] === undefined){
        res.end('Please Check the link once again there may some typo in event name');
        return;
    }

    switch(req.params['0']) {
        case "astronomy":
            eventx = Astronomy;
            allowedUser = authUser.astronomy;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "coding":
            eventx = Cybros;
            allowedUser = authUser.cybros;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "literature":
            eventx = Literary;
            break;
        case "robotics":
            eventx = Robotics;
            allowedUser = authUser.robotics;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "management":
            eventx = Ecell;
            allowedUser = authUser.ecell;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "quizzing":
            eventx = Quiz;
            allowedUser = authUser.quiz;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "workshop":
            eventx = Workshop;
            allowedUser = authUser.astronomy;
            break;
            default:
            res.end('Please Check the link once again there may some typo in club name');
            return;
            break;
    }
    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }

    eventx.find({'eventName' : req.query.event},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
                }
                // check to see if theres already a user with that email
                if (user){
                    var success = 0;
                    for(var i=0; i< results.length; i++){
                        if(results[i].payment.status === 'TXN_SUCCESS')success++;
                    }
                    res.render('partials/team',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                        paymentUser : paymentUser,
                        success : success,
                    });
                }
            });
        }
    });
});

router.get('/user/all', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
        res.end("You are not authorized. Login and try");
        return;
     }
    UserEvent.find(function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // check to see if theres already a user with that email
                if (user){
                    res.render('partials/users',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});

router.get('/user/registered', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
        res.end("You are not authorized. Login and try");
        return;
     }
    User.find(function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // check to see if theres already a user with that email
                if (user){
                    res.render('partials/users',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});

router.get('/contact', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
        res.end("You are not authorized. Login and try");
        return;
    }
    else{
        Contact.find(function (err, results) {
            if (err){
                console.error(err)
                res.end('Internal Server error')
                return;
            }
            else{
                User.findOne({'email' : req.decoded.sub }, function(err, user) {
                    if (err){
                        console.log(err);
                        res.end('Internal Server error')
                        return;
                    }
                    if (user){
                        res.render('partials/contact-us',{
                            results : results,
                            isLoggedIn : true,
                            user : user,
                        });
                    }
                });
            }
        });
    }

});

router.get('/user/registered/csv', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
        res.end("You are not authorized. Login and try");
        return;
     }
    res.writeHead(200, {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=registereduser.csv'
    });
    // pipe file using mongoose-csv
    User.find().csv(res);
});

router.get('/csv/*', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    var allowedUser = ['jainmukul1996@gmail.com'];
    var paymentUser = poc.slice(0);

    if(EventURL[req.query.event] === undefined){
        res.end('Please Check the link once again there may some typo in event name');
        return;
    }

    switch(req.params['0']) {
        case "astronomy":
            eventx = Astronomy;
            allowedUser = authUser.astronomy;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "coding":
            eventx = Cybros;
            allowedUser = authUser.cybros;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "literature":
            eventx = Literary;
            break;
        case "robotics":
            eventx = Robotics;
            allowedUser = authUser.robotics;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "management":
            eventx = Ecell;
            allowedUser = authUser.ecell;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "quizzing":
            eventx = Quiz;
            allowedUser = authUser.quiz;
            paymentUser = paymentUser.concat(allowedUser[0]);
            break;
        case "workshop":
            eventx = Workshop;
            allowedUser = authUser.admin;
            break;
            default:
            res.end('Please Check the link once again there may some typo in club name');
            return;
            break;
    }
    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }

    User.findOne({'email' : req.decoded.sub }, function(err, user) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }
        // check to see if theres already a user with that email
        if (user){
            res.writeHead(200, {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=' + req.query.event + '.csv'
            });
            eventx.find({'eventName' : req.query.event}).csv(res);
        }
    });
});


router.get('/acco/*', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    var allowedUser = ['jainmukul1996@gmail.com'];
    var paymentUser = poc.slice(0);

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }

    switch(req.params['0']) {
        case "astronomy":
            eventx = Astronomy;
            break;
        case "coding":
            eventx = Cybros;
            break;
        case "literature":
            eventx = Literary;
            break;
        case "robotics":
            eventx = Robotics;
            break;
        case "management":
            eventx = Ecell;
            break;
        case "quizzing":
            eventx = Quiz;
            break;
        case "workshop":
            eventx = Workshop;
            allowedUser = authUser.admin;
            break;
        default:
            res.end('Please Check the link once again there may some typo in club name');
            return;
            break;
    }



    eventx.find({"payment.status" : "TXN_SUCCESS"},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
                }
                // check to see if theres already a user with that email
                if (user){
                    var count = 0;
                    for(var i=0; i< results.length; i++){
                        for(var j=0; j< results[i].team.length; j++){
                            if(results[i].team[j].accommodation === "yes") count++;
                        }
                    }
                    res.json({count : count});
                }
            });
        }
    });
});


module.exports = router;
