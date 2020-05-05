<?php

if($_POST){

    $name = $_POST['name'];

    $email = $_POST['email'];

    //$boatowner = $_POST['boatowner'];

    //$country = $_POST['country'];

    //$model = $_POST['model'];

    //$motoroption = $_POST['motoroption'];

    //$traileroption = $_POST['traileroption'];

    $project = $_POST['project'];

    //$selectedOpt = $_POST['selectedOpt'];



//send email

    mail("sawant1810@gmail.com", "Enquiry from " .$name, " You have recieved a new enquiry from: \r\n Name: ".$name ."\r\nEmail ID: ". $email."\r\nProject: ". $project);

}



?>

