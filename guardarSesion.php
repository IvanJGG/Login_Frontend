<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username'])) {
    $_SESSION['username'] = $_POST['username'];
    $message = 'Sesión iniciada';
} else {
    http_response_code(400);
    $message = 'Solicitud inválida';
}

exit(json_encode(compact('message', '_POST')));
