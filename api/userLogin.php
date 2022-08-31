<?php 
include('dbConfig.php');
cors(); 
header("Content-Type: application/json; charset=UTF-8");
$x=json_decode(file_get_contents("php://input"));

$username=$x->username;
$password=$x->password;


$sql='SELECT * FROM users WHERE Username = ? and  Password= ?';
$query=$db->prepare($sql);
$query->execute([$username,$password]);
$num=$query->rowCount();

if($num > 0){
    $row = $query->fetch(PDO::FETCH_ASSOC);
    http_response_code(200);
        
        echo json_encode(
            array(
                "message" =>true,
                "userData" => $row
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