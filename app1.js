var express = require('express');
var bodyParser = require('body-parser');
var Mongoose = require('mongoose');


var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))


const studentSchema = new Mongoose.Schema({
    name: String,
    roll: Number,
    adminNo: Number,
    clg: String

});

var studentModel = Mongoose.model('students', studentSchema);

Mongoose.connect("mongodb+srv://anish:anish@cluster0-zf1or.mongodb.net/test?retryWrites=true&w=majority");







app.get('/', (req, res) => {

    res.send("hai..");
});


app.post('/reg', async(req, res) => {


    try {

        var studentData = new studentModel(req.body);
        var result = await studentData.save();

        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }


});

app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});