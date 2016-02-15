var express = require('express');
var router = express.Router();
var path = require('path');

function subtraction(input1, input2){
    var answer = parseFloat(input1) - parseFloat(input2);
    answer = answer.toString();
    return answer;
}

router.post('/', function(req, res) {
    console.log('subtract route working');
    res.send(subtraction(req.body.input1, req.body.input2));
});

module.exports = router;