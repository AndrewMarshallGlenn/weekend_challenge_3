    var values = {};

    function chooseMethod(objectType){
        switch(values.type) {
            case '+':
                result = '/addition';
                return result;
            case '-':
                result = '/subtraction';
                return result;
            case '*':
                result = '/multiplication';
                return result;
            case '/':
                result = '/division';
                return result;
        }
    }
    function addButton(){
        values.type = 'addition';
        $('#type').text('plus');
        $('#display2').text('+');
    }
    function subtractButton(){
        values.type = 'subtraction';
        $('#type').text('minus');
        $('#display2').text('-');
    }
    function multiplyButton(){
        values.type = 'multiplication';
        $('#type').text('times');
        $('#display2').text('*');
    }
    function divideButton(){
        values.type = 'division';
        $('#type').text('divided by');
        $('#display2').text('/');
    }
    function clearButton(){
        $('#calculator-form').find('input[type=text]').val('');
        $('#display1').text('');
        $('#display2').text('');
        $('#display3').text('');
    }
    function zeroButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('0');
        } else {$('#display3').append('0');}
    }
    function oneButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('1');
        } else {$('#display3').append('1');}
    }
    function twoButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('2');
        } else {$('#display3').append('2');}
    }
    function threeButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('3');
        } else {$('#display3').append('3');}
    }
    function fourButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('4');
        } else {$('#display3').append('4');}
    }
    function fiveButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('5');
        } else {$('#display3').append('5');}
    }
    function sixButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('6');
        } else {$('#display3').append('6');}
    }
    function sevenButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('7');
        } else {$('#display3').append('7');}
    }
    function eightButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('8');
        } else {$('#display3').append('8');}
    }
    function nineButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('9');
        } else {$('#display3').append('9');}
    }
    function decimalButton(){
        if(($('#display2').text()) == ''){
            $('#display1').append('.');
        } else {$('#display3').append('.');}
    }
    function submitButton(){
        values.input1 = $('#display1').text();
        values.input2 = $('#display3').text();
        values.type = $('#display2').text();
        $('#display1').text('');
        $('#display2').text('');
        $('#display3').text('');
        var question = chooseMethod(values);
        $.ajax({
            type: 'POST',
            url: question,
            data: values,
            success: function(data) {
                console.log(data);
                $('#answer-text').text(data);
            }
        });
        console.log(values);
        $('#answer-text').text('');
    }

    $(document).ready(function() {
        $('#add').on('click', addButton);
        $('#subtract').on('click', subtractButton);
        $('#multiply').on('click', multiplyButton);
        $('#divide').on('click', divideButton);
        $('#submit').on('click', submitButton);
        $('#clear').on('click', clearButton);
        $('#zero').on('click', zeroButton);
        $('#one').on('click', oneButton);
        $('#two').on('click', twoButton);
        $('#three').on('click', threeButton);
        $('#four').on('click', fourButton);
        $('#five').on('click', fiveButton);
        $('#six').on('click', sixButton);
        $('#seven').on('click', sevenButton);
        $('#eight').on('click', eightButton);
        $('#nine').on('click', nineButton);
        $('#decimal').on('click', decimalButton);
    });