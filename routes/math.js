var express = require('express');
var router = express.Router();
var path = require('path');
var result = '';

function calculate(input1, input2, type){
    switch(type) {
        case 'addition':
            result = addition(input1, input2);
            return result;
        case 'subtraction':
            result = subtraction(input1, input2);
            return result;
        case 'multiplication':
            result = multiplication(input1, input2);
            return result;
        case 'division':
            result = division(input1, input2);
            return result;
    }
}

function addition(input1, input2){
    var answer = parseFloat(input1) + parseFloat(input2);
    answer = answer.toString();
    return answer;
}

function subtraction(input1, input2){
    var answer = parseFloat(input1) - parseFloat(input2);
    answer = answer.toString();
    return answer;
}

function multiplication(input1, input2){
    var answer = parseFloat(input1) * parseFloat(input2);
    answer = answer.toString();
    return answer;
}

function division(input1, input2){
    var answer = parseFloat(input1) / parseFloat(input2);
    answer = answer.toString();
    return answer;
}

router.post('/', function(req, res) {
    console.log('math route working');
    res.send(calculate(req.body.input1, req.body.input2, req.body.type));
});

module.exports = router;