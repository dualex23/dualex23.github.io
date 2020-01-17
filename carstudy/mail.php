<?php

$frm_name  = "Заявка или Отзыв для Bertram Sergey";
$recepient = "admin@carstudy.ru";
$sitename  = "Автоинструктор в Королеве";
$subject   = "Новый отзыв/заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$text = trim($_POST["message"]);
$message = "Заголовок: $title \nИмя: $name \nСообщение: $text";
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
