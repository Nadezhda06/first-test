function call() {
          var msg   = $('#form').serialize();
           $.ajax({
             type: 'POST',
             url: 'https://60376bfd5435040017722533.mockapi.io/form',
             data: msg,
            success: function(data) {  
                $('#form').remove(); 
                $('#results').html(data); 
             },
             error:  function(xhr, str){ 
            alert('Возникла ошибка: ' + xhr.responseCode);
             }
           });
       }