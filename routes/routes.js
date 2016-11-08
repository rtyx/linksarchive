const express = require('express');
const router = express.Router();
const aux = require('./aux.js');

//HOME

router.get('/index', function (req,res) {
    var count = req.query.count;
    aux.getImages(count)
    .then(function(response){
        res.json(response.rows);
    })
    .catch(function(error){
        console.log(error(error));
        res.json({
            success: false,
            reason: error
        });
    });
});

module.exports = router;