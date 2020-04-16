var Mongoose = require('mongoose');

const facultySchema = new Mongoose.Schema({
    name: String,
    dept: String,
    clg: String

});

var facultyModel = Mongoose.model('faculty', facultySchema);

module.exports = {
    facultyModel
}
