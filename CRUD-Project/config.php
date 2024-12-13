<?php

$server = 'localhost';
$dbname = 'projectdb';
$username = 'root';
$password = '';

try{
    $connect = new PDO("mysql:host=$server; dbname=$dbname", $username,$password);
}catch(Execption $e){
    echo "Something went wrong";
}

?>