<?php

require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';

$mail = new PHPMailer();

// Set up SMTP
$mail->isSMTP();
$mail->Host = 'smtp.example.com';
$mail->Port = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->SMTPAuth = true;
$mail->Username = 'your_email@example.com';
$mail->Password = 'your_email_password';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["content"];

    // Validate form data (you can add your own validation logic here)

    // Set up email variables
    $mail->setFrom("auto@bizontek.cz");
    $mail->addAddress("jiri.malec@bizontek.cz");
    $mail->Subject = "BizonTek - Nový lead";
    $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

    $mail->send();
    echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
