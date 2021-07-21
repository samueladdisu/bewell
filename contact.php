<?php
    echo $_POST["submit"];
    if(isset($_POST['submit'])){

        echo 'form submitted';
        // $name = $_POST['fname'];
        $to = 'sales@bewelltradingco.com';
        $header = $_POST['email'];
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        if ( mail($to, $subject, $msg, $header)) {
            echo("Email successfully sent to $to...");
         } else {
            echo("Email sending failed...");
         }
    }