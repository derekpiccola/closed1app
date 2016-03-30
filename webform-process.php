<?php
    $to = "derekpiccola@gmail.com"; 
    $from = "derekpiccola@gmail.com";
    // $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "Closed1app.com form submission"; 
    $fields = array(); 
    // $fields{"name"} = "name"; 
    $fields{"email"} = "email"; 
    // $fields{"phone"} = "phone"; 
    // $fields{"message"} = "message";
    $body = "Sign up email address:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>