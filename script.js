document.getElementById('guardarButton')?.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:5208/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(async response => {
        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }
       

        let body = await response.json();
        return fetch('guardarSesion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(body)
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al iniciar sesión en PHP');
        }
        window.location.href = 'bienvenido.php';
    })
    .catch(error => {
        alert('No se pudo conectar al backend en este momento. Error: ' + error.message);
    });
});

document.getElementById('guardarButtonRegister')?.addEventListener('click', function() {
    const fullnameRegister = document.getElementById('fullnameRegister').value;
    const usernameRegister = document.getElementById('usernameRegister').value;
    const passwordRegister = document.getElementById('passwordRegister').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (passwordRegister !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    const data = {
        fullnameRegister: fullnameRegister,
        usernameRegister: usernameRegister,
        passwordRegister: passwordRegister
    };

    fetch('http://localhost:5208/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        alert('Registro exitoso');
    })
    .catch(error => {
        alert('No se pudo conectar al backend en este momento. Error: ' + error.message);
    });
    //cambiar todos los .then por async y await, usar try catch, mejorar los mensajes para saber que está pasando exactamente, buscar como poner los mensajes para programador de consola
});
