<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuario</title>
    <link rel="stylesheet" href="styles.css">

</head>
<body>

    <h1>Registro de Usuario</h1>
    <form action="procesar.php" method="POST">
        <label for="fullname">Nombre Completo:</label>
        <input type="text" id="fullname" name="fullname" required><br>

        <label for="username_login">Nombre de Usuario:</label>
        <input type="text" id="username" name="username_login" required><br>

        <label for="password_login">Contraseña:</label>
        <input type="password" id="password" name="password_login" required><br>

        <label for="confirm_password">Verificar Contraseña:</label>
        <input type="password" id="confirm_password" name="confirm_password" required><br>

        <input type="button" value="Guardar" onclick="alert('No se pudo conectar al backend en este momento');">
    </form>

</body>
</html>
