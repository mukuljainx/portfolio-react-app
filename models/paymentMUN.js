var mongoose = require('mongoose');
var mongoose_csv = require('mongoose-csv');

var paymentMUNSchema = mongoose.Schema({
        order_id      : String,
        amount        : Number,
        accommodation : Number,
        type          : String,
        name          : String,
        email         : String,
        phoneNumber   : Number,
        institute     : String,
        status        : String,
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
);
paymentMUNSchema.plugin(mongoose_csv);
// create the model for payments and expose it to our app
module.exports = mongoose.model('PaymentMUN', paymentMUNSchema);
