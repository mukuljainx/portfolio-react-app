var mongoose = require('mongoose');


var userEventSchema = mongoose.Schema({
        email          : String,
        events         : Array,
        paidEvents     : Array,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('UserEvent', userEventSchema);
