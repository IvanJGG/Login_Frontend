<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingreso de Usuario</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Ingreso de Usuario</h1>
    <form>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required><br>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required><br>

        <input type="button" value="Ingresar" onclick="alert('No se pudo conectar al backend en este momento');">
        <input type="button" value="Registrar" onclick="window.location.href='registrar.php';">
    </form>    

</body>
</html>
