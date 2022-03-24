<?php

$usuario = $_POST["usuario"];
$pass = $_POST["pass"];

if ($usuario === "" || $pass === "") {
    // Convertimos el echo en formato JSON para poder procesarlo con fetch 
    echo json_encode("error");
} else {
    echo json_encode("Correcto <br>Usuario: " . $usuario . "<br>Pass: " . $pass);
}
