<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username'])) {
    
    $_SESSION['username'] = $_POST['username'];
    echo 'Sesión iniciada';
} else {
    http_response_code(400); 
    echo 'Solicitud inválida';
}
?>
