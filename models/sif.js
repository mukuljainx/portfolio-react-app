var mongoose = require('mongoose');
var mongoose_csv = require('mongoose-csv');

var sifSchema = mongoose.Schema({
    detail:
        {
            name                    : String,
            description             : String,
            location                : String,
            website                 : String,
            representativeName      : String,
            representativeEmail     : String,
            representativeContact   : String,
            field                   : Array,
            stipend                 : Boolean,
            numberofOpening         : Number
        },
        teamEmail  : String,
        teamNumber  : Number,
        payment    : {
            status   : String,
            order_id : String,
            date     : String,
            amount   : Number,
        },
});
sifSchema.plugin(mongoose_csv);
// create the model for users and expose it to our app
module.exports = mongoose.model('SIF', sifSchema);
