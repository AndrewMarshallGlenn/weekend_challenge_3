    var values = {};

    function addButton(){
        values.type = 'addition';
        $('#type').text('plus');
    }
    function subtractButton(){
        values.type = 'subtraction';
        $('#type').text('minus');

    }
    function multiplyButton(){
        values.type = 'multiplication';
        $('#type').text('times');

    }
    function divideButton(){
        values.type = 'division';
        $('#type').text('divided by');

    }
    function submitButton(){
        event.preventDefault();
        $.each($('#calculator-form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        $.ajax({
            type: 'POST',
            url: '/math',
            data: values,
            success: function(data) {
                console.log(data);
                $('#answer-text').text(data);
            }
        });
        console.log(values);
        $('#answer-text').text('');
        $('#calculator-form').find('input[type=text]').val('');
    }

    $(document).ready(function() {
        $('#add').on('click', addButton);
        $('#subtract').on('click', subtractButton);
        $('#multiply').on('click', multiplyButton);
        $('#divide').on('click', divideButton);
        $('#submit').on('click', submitButton);



    });