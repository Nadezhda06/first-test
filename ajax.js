function ValidateAndSend(name, phone, email){
  if ((ValidateFIO(name) && ValidatePhoneNumber(phone)) && ValidateEmail(email)){
    call();
  }
  else {alert}
}

function call() {
  var msg = $('#form').serialize();
  alert(msg);
  $.ajax({
    type: 'POST',
    url: 'https://60376bfd5435040017722533.mockapi.io/form',
    data: msg,
    success: function(data) {  
      $('#form').remove(); 
    },
    error:  function(xhr, str){ 
      alert('Возникла ошибка: ' + xhr.responseCode);
    }
  });
}

function ValidateEmail(inputText) {
  var mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mail_regex)) {
    return true;
  }
  else {
    alert("Неправильно введен адрес почты!");
    return false;
  }
}

function ValidatePhoneNumber(inputText) {
  var phone_regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if(inputText.value.match(phone_regex)) {
    return true;
  }
  else {
    alert("Неправильно введен номер телефона!");
    return false;
  }
}

function ValidateFIO(inputText) {
  var fio_regex = /^[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]*$/
  if(inputText.value.match(fio_regex)) {
    return true;
  }
  else {
    alert("Неправильно введены ФИО!");
    return false;
  }
}
