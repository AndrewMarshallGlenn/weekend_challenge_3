    $(document).ready(function() {
        $('#add').on('click', addButton);
        $('#subtract').on('click', subtractButton);
        $('#multiply').on('click', multiplyButton);
        $('#divide').on('click', divideButton);

        function addButton(){
            event.preventDefault();
            var values = {};
            $.each($('#calculator-form').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                type: 'POST',
                url: '/add',
                data: values,
                success: function(data) {
                    console.log(data);
                    $('#answer-text').text(data);
                }
            });
            $('#answer-text').text('');
            $('#calculator-form').find('input[type=text]').val('');

        }
        function subtractButton(){
            event.preventDefault();
            var values = {};
            $.each($('#calculator-form').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                type: 'POST',
                url: '/subtract',
                data: values,
                success: function(data) {
                    console.log(data);
                    $('#answer-text').text(data);
                }
            });
            $('#answer-text').text('');
            $('#calculator-form').find('input[type=text]').val('');

        }
        function multiplyButton(){
            event.preventDefault();
            var values = {};
            $.each($('#calculator-form').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                type: 'POST',
                url: '/multiply',
                data: values,
                success: function(data) {
                    console.log(data);
                    $('#answer-text').text(data);
                }
            });
            $('#answer-text').text('');
            $('#calculator-form').find('input[type=text]').val('');

        }
        function divideButton(){
            event.preventDefault();
            var values = {};
            $.each($('#calculator-form').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            $.ajax({
                type: 'POST',
                url: '/divide',
                data: values,
                success: function(data) {
                    console.log(data);
                    $('#answer-text').text(data);
                }
            });
            $('#answer-text').text('');
            $('#calculator-form').find('input[type=text]').val('');

        }


    });