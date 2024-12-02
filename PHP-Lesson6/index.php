<?php

$host = 'localhost';
$user = 'root';
$pass = '';

try{
    $conn = new PDO("mysql:host=$host;", $user, $pass);

    $sql = "CREATE DATABASE test3";
    $conn->exec($sql);

    echo "Database is created";
} catch (Exception $e){
    echo "Something went wrong";
}


?>