<meta charset="UTF-8" />
<?php

	if (isset($_POST['name']) && $_POST['name'] != "")
		$name = $_POST['name'];
	else die ("Не заполнено поле \"Фамилия Имя Отчество *\"");

    if (isset($_POST['phone']) && $_POST['phone'] != "") 
		$phone = $_POST['phone'];
	else die ("Не заполнено поле \"Телефон *\"");

	if (isset($_POST['email']) && $_POST['email'] != "")
		$email = $_POST['email'];
	else die ("Не заполнено поле \"Email\"");


	$address = "https://60376bfd5435040017722533.mockapi.io/form";
	$mes  = "Фамилия Имя Отчество *: $name \n";
    $mes .= "Телефон *: $phone \n";
	$mes .= "E-mail: $email \n"; 
	$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

	if ($send)
		echo "Сообщение отправлено успешно!";
	else 
		echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
		 
?>