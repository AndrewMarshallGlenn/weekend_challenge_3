var express = require('express');
var router = express.Router();
var path = require('path');

function multiplication(input1, input2){
    var answer = parseFloat(input1) * parseFloat(input2);
    answer = answer.toString();
    return answer;
}

router.post('/', function(req, res) {
    console.log('multiply route working');
    res.send(multiplication(req.body.input1, req.body.input2));
});

module.exports = router;