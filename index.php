<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> -->
    <link rel="stylesheet" href="style.css">
    <title>drumJS</title>
</head>

<body>
    <div class="content">
        <header>
            <a href="/drumjs">drumJS</a>
            <?php
            if (!$_SESSION) {
                ?>
                <a href="php/enter.html">Enter</a>
                <a href="php/reg.html">Registration</a>
                <?php
            }
            ?>
            <button onclick="
            let req = new XMLHttpRequest
            req.open('POST','php/leave.php')
            req.send(null)
            location.reload()
"
            >Leave</button>
        </header>
        <hr>
        <div class="areaBtn" id="areaBtn">
            <button id="addSickBtn">Sick</button>
            <button id="addStrongBtn">Strong</button>
            <button id="addBothBtn">Both</button>
            <button id="startBtn">Start</button>
            <button id="clearLastBtn">Clear Last</button>
            <button id="clearAllBtn">Clear All</button>
            <button id="loadBtn">Load</button>
        </div>
        <hr>

        <div class="speedArea">
            <label for="speedInput"> Speed
                <input id="speedInput" type="number">
                <!--        <input type="submit" value="Set" id="setSpeedBtn">-->
            </label>
            <button id="speedBtn40" class="speedBtnX">40</button>
            <button id="speedBtn60" class="speedBtnX">60</button>
            <button id="speedBtn80" class="speedBtnX">80</button>
            <button id="speedBtn100" class="speedBtnX">100</button>
            <button id="speedBtn120" class="speedBtnX">120</button>
        </div>

        <hr>
        <div class="areaKick" id="areaKick"></div>
        <button id="double">Kicks x2 </button>
        <hr>
        <div class="divScreen">
        <div class="screen" id="screen">
        </div>
        </div>
<!--        <div class="modal" id="modal">-->
<!--            <button id="modalBtn">BUTTON</button>-->
<!--        </div>-->
        <div id="text">
            <h1>Welcome 2 drumJS!</h1>
            <h2> U can create ur own exercise 4 drumming!</h2>
            <h3>Just need select kicks, speed and press Start!!!</h3>
        </div>
    </div>
    <script src="main.js"></script>
</body>

<?php
session_start();
    echo "hi, $login";
?>

</html>