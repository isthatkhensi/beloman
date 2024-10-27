<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['full-name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $zip = $_POST['zip'] ?? '';
    $message = $_POST['message'] ?? '';

    $to = "smkhensi@gmail.com";  // Replace with your actual email
    $subject = "New Estimate Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nZip: $zip\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your message was sent successfully!";
    } else {
        echo "There was an error sending your message.";
    }
} else {
    echo "Invalid request.";
}
?>