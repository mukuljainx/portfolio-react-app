var mongoose = require('mongoose');
var mongoose_csv = require('mongoose-csv');

var errorSchema = mongoose.Schema({
        id              : String,
        eventName       : String,
        clubName        : String,
        order_id        : String,
        error           : String,
        date            : String,
});

errorSchema.plugin(mongoose_csv);
// create the model for payments and expose it to our app
module.exports = mongoose.model('ErrorDB', errorSchema);
