<?php
require_once "user-pass.php";
    $dbh = new PDO('mysql:host=localhost;dbname=drumjs', $user, $pass);
    $statement = $dbh->prepare('INSERT INTO users (name, email, password)
    VALUES (:name, :email, :password)');

    $statement->execute([
        'name' => $_POST[name],
        'email' => $_POST[email],
        'password' => crypt($_POST[password])
        ]);

header('Location: enter.html ');