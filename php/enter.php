<?php
// enter in site
require_once "user-pass.php";
    $dbh = new PDO('mysql:host=localhost;dbname=drumjs', $user, $pass);
    $stmt = $dbh->prepare("SELECT * FROM users WHERE name LIKE ?");
if ($stmt->execute(array("%$_POST[login]%"))) {
    while ($row = $stmt->fetch()) {
          echo "<div>
        {$row['name']}
        {$row['email']} 
        {$row['password']} <br />
        </div>";
    }
}

// header('Location: http://localhost/drumjs/php/enter.html ');