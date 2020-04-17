var Mongoose = require('mongoose');

const studentSchema = new Mongoose.Schema({
    name: {
        type:String
    },
    roll: {
        type:Number
    },
        
    adminNo: Number,
    clg: String

});

var studentModel = Mongoose.model('students', studentSchema);

module.exports = { studentModel }

