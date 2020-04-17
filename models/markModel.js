var Mongoose = require('mongoose');

const markSchema = new Mongoose.Schema({

    studentId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'students'
    },

    mark_physics: {
        type: Number
    },

    mark_chemistry: {
        type: Number
    },

    mark_maths: {
        type: Number
    }


});

var markModel = Mongoose.model('Marks', markSchema);

module.exports = {
    markModel
}