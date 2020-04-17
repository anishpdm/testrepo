var express = require('express')
var {
    markModel
} = require('../models/markModel')


var {
    studentModel
} = require('../models/studentModel')

const router = express.Router();

router.get('/', (req, res) => {
    res.send("my Student Portal")
})

router.get('/display', (req, res) => {

    res.send("Display Portal")
});

router.get('/parent', (req, res) => {

    res.send("Parent Portal")

})


router.post('/reg', async (req, res) => {

    try {

        var studentData = new studentModel(req.body);
        var result = await studentData.save();

        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});


router.get('/viewall', async (req, res) => {

    try {

        var result = await studentModel.find();
        res.send(result);


    } catch (error) {

        console.log(error);
        res.status(500).send(error);

    }

});

router.post('/search', async (req, res) => {

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



router.post('/check', async (req, res) => {

    try {

        var searchadmno = req.body.myadmno;
        var searchroll = req.body.myroll;

        studentModel.find({
            $or: [{
                    "adminNo": searchadmno
                },
                {
                    "roll": searchroll
                }
            ]
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

router.post('/delete', (req, res) => {

    try {

        studentModel.findByIdAndDelete(req.body._id, (error, data) => {

            if (error) {
                res.json({
                    "status": "error"
                });

            } else {

                if (data.length > 0) {

                    res.json({
                        "status": "deleted successfully"
                    });

                }



            }

        })

    } catch (error) {

    }

})



router.post('/update', (req, res) => {

    try {

        studentModel.findOneAndUpdate({
                adminNo: req.body.adminNo
            }, req.body,
            (error, data) => {

                if (error) {
                    res.json({
                        "status": "error"
                    });

                } else {
                    res.json({
                        "status": "success"
                    });

                }

            })

    } catch (error) {

    }

});



router.post('/addmarks', async (req, res) => {

    try {

        var markData = new markModel(req.body);
        var result = await markData.save();

        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});


router.get('/viewmarks', async (req, res) => {

    try {

        var result = await markModel.find();
        res.send(result);


    } catch (error) {

        console.log(error);
        res.status(500).send(error);

    }

});




module.exports = router