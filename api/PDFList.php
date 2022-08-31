<?php 
include('dbConfig.php');
cors(); 
header("Content-Type: application/json; charset=UTF-8");
$x=json_decode(file_get_contents("php://input"));
$username=$x->username;

$sql='SELECT Username,PdfName,Location FROM locationspdf WHERE Username =? ';
$query=$db->prepare($sql);
$query->execute([$username]);
$num=$query->rowCount();

if($num > 0){

    $row = $query->fetchAll(PDO::FETCH_ASSOC);
  



    http_response_code(200);
        
        echo json_encode(
            array(
                "message" =>true,
                "userPDF" => $row,
               
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