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


app.post('/reg', async (req, res) => {


    try {

        var studentData = new studentModel(req.body);
        var result = await studentData.save();

        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }


});


app.get('/viewall', async (req, res) => {

    try {

        var result = await studentModel.find();
        res.send(result);


    } catch (error) {

        console.log(error);
        res.status(500).send(error);

    }

});

app.post('/search', async (req, res) => {

    try {

        var searchkey = req.body.mydata;

        studentModel.find({
            "adminNo": searchkey
        }, (error, data) => {

            if (error) {
                throw error;

            } else {

                res.send(data);

            }

        });

    } catch (error) {

        console.log(error);
        res.status(500).send(error);

    }



});


app.post('/check', async (req, res) => {

    try {

        var searchadm = req.body.myadm;
        var searchroll = req.body.myroll;

        studentModel.find({
                $and: [{
                        "adminNo": searchadm
                    },
                    {
                        "roll": searchroll
                    }
                ]


            },


            (error, data) => {

                if (error) {
                    throw error;

                } else {

                    res.send(data);

                }

            });

    } catch (error) {

        console.log(error);
        res.status(500).send(error);

    }



});









app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});