var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookValidate = require('passport-facebook-token');
var GoogleValidate = require('passport-google-token').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./models/user');
var configAuth = require('./config/auth');

passport.serializeUser(function(user, done) {
        done(null, user.id);
});

    // used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.google = passport.use(new GoogleStrategy({
		clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
	},
	function(accessToken, refreshToken, profile, done) {
		User.findOne({ 'email': profile.emails[0].value }, function(err, user) {
		  if(err) {
		    console.log(err); // handle errors!
		  }
		  if (!err && user !== null) {
		    done(null, user);
		  } else {
		    user = new User();
			user.googleid    = profile.id;
			user.googletoken = accessToken;
			user.name  		 = profile.displayName;
			user.email 		 = profile.emails[0].value; // pull the first email
            user.valid       = false;

		    user.save(function(err) {
		      if(err) {
		        console.log(err); // handle errors!
		      } else {
		        console.log("saving user ...");
		        done(null, user);
		      }
		    });
		  }
		})
	})
);


exports.facebook = passport.use(new FacebookStrategy({
		clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
		profileFields   : ['id', 'emails', 'name'],
	},
	function(accessToken, refreshToken, profile, done) {
		User.findOne({ 'email': profile.emails[0].value }, function(err, user) {
		  if(err) {
		    console.log(err); // handle errors!
		  }
		  if (!err && user !== null) {
		    done(null, user);
		  } else {
		    user = new User();
			user.facebookid    = profile.id;
			user.facebooktoken = accessToken;
			user.name  		   = profile._json.first_name + " " + profile._json.last_name;
			user.email 		   = profile.emails[0].value; // pull the first email

		    user.save(function(err) {
		      if(err) {
		        console.log(err); // handle errors!
		      } else {
		        console.log("saving user ...");
		        done(null, user);
		      }
		    });
		  }
		})
	})
);


exports.facebookValidate = passport.use(new FacebookValidate({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
  },
  function(accessToken, refreshToken, profile, done) {

    var user = {
        'email': profile.emails[0].value,
        'name' : profile.name.givenName + ' ' + profile.name.familyName,
        'id'   : profile.id,
    }
    return done(null, user);
  }
));

exports.googleValidate = passport.use(new GoogleValidate({
    clientID        : configAuth.googleAuth.clientID,
    clientSecret    : configAuth.googleAuth.clientSecret,
  },
  function(accessToken, refreshToken, profile, done) {
      if(err){
          console.log(err);
          res.end('Internal server error');
      }
      return done(err, profile);
  }
));
