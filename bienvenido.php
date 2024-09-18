<?php
session_start();

// Verificar si la sesión está activa
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
} else {
    // Si no hay sesión activa, redirigir al login
    header('Location: index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bienvenido <?php echo htmlspecialchars($fullname); ?></h1>
    <h2>tu usuario con el que ingresaste es: <?php echo htmlspecialchars($username); ?></h2>
    <form action="cerrarsesion.php" method="post">
        <input type="submit" value="Cerrar Sesión" name="logout">
    </form>
</body>
</html>
