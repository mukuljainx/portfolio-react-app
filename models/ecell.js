var mongoose = require('mongoose');
var mongoose_csv = require('mongoose-csv');

var ecellRegistrationSchema = mongoose.Schema({
    team : [
        {
            email          : String,
            name           : String,
            phoneNumber    : Number,
            college        : String,
            year           : Number,
            city           : String,
            accommodation  : String,
            resume         : String,
            eventName      : String,
            field          : Array,
        }
    ],
    eventName : String,
    teamEmail  : String,
    teamNumber  : Number,
    payment    : {
        status   : String,
        order_id : String,
        date     : String,
        amount   : String,
    },
});

ecellRegistrationSchema.plugin(mongoose_csv);
// create the model for users and expose it to our app
module.exports = mongoose.model('Ecell', ecellRegistrationSchema);
