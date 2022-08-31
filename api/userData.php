<?php 
include('dbConfig.php');
cors(); 
header("Content-Type: application/json; charset=UTF-8");
$x=json_decode(file_get_contents("php://input"));

$username=$x->selectedUser;
$name="";
$surname="";
$location="";

$sql='SELECT Name,Surname,Username,Password,Location FROM users WHERE Username = ? ';
$query=$db->prepare($sql);
$query->execute([$username]);
$num=$query->rowCount();

if($num > 0){

    $row = $query->fetch(PDO::FETCH_ASSOC);
    $name=$row["Name"];
    $surname=$row["Surname"];
    $location=$row["Location"];



    http_response_code(200);
        
        echo json_encode(
            array(
                "message" =>true,
                "name" => $name,
                "surname"=>$surname,
                "username"=>$username,
                "location"=>$location
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