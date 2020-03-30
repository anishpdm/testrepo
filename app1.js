var express = require("express");
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res) => {

    res.json({
        "result": "test"
    });

});

app.post('/read', (req, res) => {

    var name = req.body.getname;
    var roll = req.body.getroll;
    console.log(req);
    res.send(req.body);
});



app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});