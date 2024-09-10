document.getElementById('guardarButton').onclick = function() {
    // Capturar los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Crear el objeto de datos que se enviará al backend
    const data = {
        username: username,
        password: password
    };

    // Enviar la solicitud POST al backend
    fetch('http://localhost:5208/users/login', {
        method: 'POST', // Usar el método POST
        headers: {
            'Content-Type': 'application/json' // Especificar el tipo de contenido como JSON
        },
        body: JSON.stringify(data) // Convertir los datos a JSON y enviarlos en el cuerpo de la solicitud
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        // Mostrar un mensaje de éxito si la solicitud es exitosa
        alert('Inicio de sesión exitoso: ' + JSON.stringify(data));
    })
    .catch(error => {
        // Mostrar un mensaje de error si la solicitud falla
        alert('No se pudo conectar al backend en este momento. Error: ' + error.message);
    });
};
