<?php

require_once 'connect.php';

$login = trim($_POST['name']);
$pwd = trim($_POST['password']);

if(!empty($login) && !empty($pwd)){
        $sql = 'SELECT name, password FROM users WHERE name = :login';
        $params = [':login' => $login];

        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);

        $user = $stmt->fetch(PDO::FETCH_OBJ);

        if($user) {
            if (password_verify($pwd, $user->password)) {
                header('Location: /drumjs');
            } else {
                echo 'wrong';
            }
        }else {
                echo 'wrong';
            }
        } else {
    echo 'wrong';
}