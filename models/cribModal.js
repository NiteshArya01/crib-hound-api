const mongoose = require('mongoose');

const cribModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    img: {
        type: String
    },
    location: {
        type: String
    }
})

const cribSchema = mongoose.model('cribs', cribModel);


module.exports = cribSchema;