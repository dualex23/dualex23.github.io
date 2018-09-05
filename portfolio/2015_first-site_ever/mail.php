<?php

$frm_name  = "Заявка или Отзыв";
$recepient = "test@test.ru";
$sitename  = "Автоинструктор";
$subject   = "Новый отзыв/заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$text = trim($_POST["message"]);
$message = "Заголовок: $title \nИмя: $name \nСообщение: $text";
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
