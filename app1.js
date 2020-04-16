var express = require('express');
var bodyParser = require('body-parser');
var Mongoose = require('mongoose');
var studentRouter = require('./routes/student')
var adminRouter = require('./routes/admin')
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/student', studentRouter)
app.use('/', adminRouter)
Mongoose.connect("mongodb+srv://anish:anish@cluster0-zf1or.mongodb.net/test?retryWrites=true&w=majority");
app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});

