var mongoose = require('mongoose');


var cryptexSchema = mongoose.Schema({
    level : Number,
    question  : String,
    answer  : String,
    image : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Cryptex', cryptexSchema);
