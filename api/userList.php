<?php 
include('dbConfig.php');
cors(); 
header("Content-Type: application/json; charset=UTF-8");
$x=json_decode(file_get_contents("php://input"));


$name="";
$surname="";
$location="";

$sql='SELECT Name,Surname,Username,Password,Location FROM users WHERE UserType = "user" ';
$query=$db->prepare($sql);
$query->execute();
$num=$query->rowCount();

if($num > 0){

    $row = $query->fetchAll(PDO::FETCH_ASSOC);
  



    http_response_code(200);
        
        echo json_encode(
            array(
                "message" =>true,
                "usersList" => $row,
               
            ));
        }    


else{
 
    http_response_code(200);
     echo json_encode(
            array(
            	"message" => false
                
                
            ));
        }  




?>