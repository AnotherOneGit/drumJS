<?php

require_once 'connect.php';
$login = trim($_POST['name']);
$pwd = trim( $_POST['password']);

//if(!empty($login) && !empty($pwd)) {
    $sql_check = 'SELECT EXISTS(SELECT name FROM users WHERE name = :login)';
    $stmt_check = $pdo->prepare($sql_check);
    $stmt_check->execute([':login'=>$login]);

    if($stmt_check->fetchColumn()) {
        die('exist');
    }

    $pwd = password_hash($pwd, PASSWORD_DEFAULT);
    $sql = 'INSERT INTO users(name, password) VALUES(:login, :pwd)';
    $params = [':login' => $login, ':pwd' => $pwd];
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    echo ('ok');
//    header('Location: /drumjs/php/enter.html');
//} else {
//    echo('User exists');
//}