var express = require('express');
var router = express.Router();
var path = require('path');

function addition(input1, input2){
    var answer = parseFloat(input1) + parseFloat(input2);
    answer = answer.toString();
    return answer;
}

router.post('/', function(req, res) {
    console.log('add route working');
    res.send(addition(req.body.input1, req.body.input2));
});

module.exports = router;
