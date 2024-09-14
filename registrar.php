<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuario</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>

</head>
<body>

    <h1>Registro de Usuario</h1>
    <form>
        <label for="fullname">Nombre Completo:</label>
        <input type="text" id="fullname" name="fullname" required><br>

        <label for="usernameRegister">Nombre de Usuario:</label>
        <input type="text" id="usernameRegister" name="usernameRegister" required><br>

        <label for="passwordRegister">Contraseña:</label>
        <input type="password" id="passwordRegister" name="passwordRegister" required><br>

        <label for="confirmPassword">Verificar Contraseña:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required><br>

        <input type="button" value="Guardar" id="guardarButtonRegister">

    </form>

</body>
</html>
