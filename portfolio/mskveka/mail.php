<?php

$frm_name  = "Сообщение с сайта mskveka.ru";
$recepient = "info@mskveka.ru";
$sitename  = "Окна Veka";
$subject   = "Новый сообщение с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$tel = trim($_POST["phone"]);
$mess = trim($_POST["text"]);
$message = "Email: $email \nИмя: $name \nТел: $tel \nСообщение: $mess";
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
