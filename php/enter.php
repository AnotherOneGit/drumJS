<?php
// enter in site
// require_once "user-pass.php";
//     $dbh = new PDO('mysql:host=localhost;dbname=drumjs', $user, $pass);
//     $sql = "SELECT name, password FROM users WHERE name = :name";
//     $params = [':name' => $name];

//     $stmt = $dbh->prepare($sql);
//     $stmt->execute($params);

//     $user = $stmt->fetch(PDO::FETCH_OBJ);

// if(password_verify($pwd, $user->password)) {
//         echo ' ok';
// } else {
//         echo 'not ok';
// }

// header('Location: enter.html ');

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
                echo 'entering';
            } else {
                echo 'wrong pass';
            }
        }else {
                echo 'wrong login';
            }
        } else {
    echo 'all inputs';
}