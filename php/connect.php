<?php

$driver = 'mysql';
$host = 'localhost';
$dbName = 'drumjs';
$dbUser = 'das';
$dbPass = 'weq';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try{
    $pdo = new PDO("$driver:host=$host;dbname=$dbName;charset=$charset", $dbUser, $dbPass, $options);
} catch(PDOException $e){
    die('Cant connect');
}