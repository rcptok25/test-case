<?php
 include ('dbConfig.php');
cors();
header("Content-Type: application/json; charset=UTF-8");



$sql= `SELECT * FROM users WHERE UserType = 'admin'`;
$query=$db->prepare($sql);

$sql='SELECT * FROM users  WHERE UserType = "admin"';
$query=$db->prepare($sql);
$query->execute();
$num=$query->rowCount();

if($num > 0){
     http_response_code(200);
        
        echo json_encode(
            array(
                "message" => "Succesful Login",
                "indexPage" => true
            ));
        }    


else{
 
    http_response_code(200);
     echo json_encode(
            array(
                "message" => "Succesful Login",
                "indexPage" => false
            ));
        }  


?>