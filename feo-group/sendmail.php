<?

$recepient = "katseduard2002@gmail.com";
$sitename = "FEO Group";
$headers = 'Content-type: text; charset=\"utf-8\"\n From: $recepient';

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$yourMessage = $_POST["message"];
$message = "Имя: $fio \nТелефон: $phone \nE-mail: $email \nСообщение: $yourMessage";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers);

?>