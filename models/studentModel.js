var Mongoose = require('mongoose');

const studentSchema = new Mongoose.Schema({
    name: String,
    roll: Number,
    adminNo: Number,
    clg: String

});

var studentModel = Mongoose.model('students', studentSchema);

module.exports = { studentModel }

