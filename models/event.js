var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
        imageLink         : String,
        registerLink      : String,
        register0         : String,
        register1         : String,
        paymentLink       : String,
        payment0          : String,
        payment1          : String,
        memberUpperLimit  : Number,
        memberLowerLimit  : Number,
        clubName          : String,
        eventName         : String,
        eventFee          : Number,
        eventDate         : String,
        eventVenue        : String,
        prizeWorth        : String,
        synopsis          : String,
        eventDescription  : String,
        rules             : String,
        judges            : String,
        mentors           : String,
        sponsors          : String,
        displayName       : String,
        query             : String,
        sponsor          : String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Event', eventSchema);
