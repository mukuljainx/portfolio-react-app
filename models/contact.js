var mongoose = require('mongoose');
var mongoose_csv = require('mongoose-csv');

var contactSchema = mongoose.Schema({
        name    : String,
        email   : String,
        query   : String,
        status  : String,
});

contactSchema.plugin(mongoose_csv);
// create the model for users and expose it to our app
module.exports = mongoose.model('Contact', contactSchema);
