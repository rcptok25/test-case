<?php 
include('dbConfig.php');
cors(); 
header("Content-Type: application/json; charset=UTF-8");
$x=json_decode(file_get_contents("php://input"));

$username=$x->username;
$password=$x->password;
$name=$x->name;
$surname=$x->surname;
$userType=$x->userType;

$sql='SELECT * FROM users WHERE Username = ? ';
$query=$db->prepare($sql);
$query->execute([$username]);
$num=$query->rowCount();

if($num == 0){
	$sql="";
	$query="";

$sql='INSERT INTO `users`( `Name`, `Surname`, `Username`, `Password`,  `UserType`) VALUES (?,?,?,?,?)';
$query=$db->prepare($sql);
$query->execute([$name,$surname,$username,$password,$userType]);

    $row = $query->fetch(PDO::FETCH_ASSOC);
    http_response_code(200);
        
        echo json_encode(
            array(
                "message" =>true,
                
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