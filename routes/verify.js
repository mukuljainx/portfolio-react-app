var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/auth');
var nJwt = require('njwt');

exports.getToken = function (user) {
    var claims = {
      sub: user.email,
      iss: 'https://plinth.in',
      permissions: 'event-registration'
    }

    var jwt = nJwt.create(claims,config.secretKey);
    jwt.setExpiration(new Date('2017-01-31'));

    var token = jwt.compact();
    var buffer = new Buffer(token);
    var finalToken = buffer.toString('base64');
    return finalToken

};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token

    var tokenx = req.body.token || req.cookies['access-token'];
    if(tokenx === undefined || tokenx === ""){
        decoded = {};
        decoded.sub = "";
        req.decoded = decoded;
        return next();
    }
    var buffer = new Buffer(tokenx, 'base64');
    var token = buffer.toString('ascii');
        // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secretKey, function (err, decoded) {
            console.log('**********************');
            console.log(decoded.sub);
            console.log('**********************');
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                return next();
            }
        });
    } else {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};
