<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';



$mail = new PHPMailer();

// Set up SMTP
$mail->isSMTP();
$mail->Host = 'smtp.seznam.cz';
$mail->Port = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->SMTPAuth = true;
$mail->Username = 'notification@bizontek.cz';
$mail->Password = 'pHUOAZrrzzyngMO8bId0';
$mail->CharSet = "UTF-8";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
$requestData = json_decode(file_get_contents('php://input'), true);

    // Check if the necessary fields exist in the form data
    if (
        isset($requestData["name"]) &&
        isset($requestData["email"]) &&
        isset($requestData["content"])
    ) {
        try {
        // Get form data
        $name = $requestData["name"];
        $email = $requestData["email"];
        $message = $requestData["content"];

    
        // Validate form data (you can add your own validation logic here)
    
        // Set up email variables
        $mail->setFrom("notification@bizontek.cz");
        $mail->addAddress("jiri.malec@bizontek.cz");
        $mail->Subject = "BizonTek - New lead";
        $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";
  
        // $mail->SMTPDebug = SMTP::DEBUG_CONNECTION;  // Set debugging level
        // $mail->Debugoutput = function ($str, $level) {
        //     // Output debug information
        //     echo "Debug level $level; message: $str\n";
        // };  
  
      $mail->send();
      echo 'Message has been sent';
      } catch (Exception $e) {
          echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
      }
    }
}
?>
