<?php

try {
  
        //$db=new PDO("mysql:host=localhost;dbname=onlinesch3_onlineschicht;charset=utf8",'onlinesch3_onlineschicht','deniz_123456&');
 $db=new PDO("mysql:host=localhost;dbname=nextjstest;charset=utf8",'nextjsadmin','nextjsadmin');
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);
    //echo "Veritabanı bağlantısı başarılı";
    //Bağlantı başarısız olursa hatayı yakalayı ekrana yazdıracağız.
    } catch (PDOException $e) {
    echo $e->getMessage();
    }

    function cors() {
    
        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
        
        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        
            exit(0);
        }
        
    
    }
?> 