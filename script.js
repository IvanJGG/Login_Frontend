document.getElementById('guardarButton')?.addEventListener('click', async function() {
    try {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = {
            username: username,
            password: password
        };

        const response = await fetch('http://localhost:5208/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error('Datos no validos del servidor:', response); 
            throw new Error('Error al ingresar usuario o contraseña');
        }

        const body = await response.json();
        //console.log('Respuesta del backend recibida:', body); 

       
        const phpResponse = await fetch('guardarSesion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(body)
        });

        if (!phpResponse.ok) {
            console.error('Error al iniciar sesión en PHP:', phpResponse); 
            throw new Error('Error al iniciar sesión');
        }

        //console.log('Sesión en PHP guardada con éxito'); 
        window.location.href = 'bienvenido.php';

    } catch (error) {
        console.error('Error en la autenticación:', error.message); 
        alert('No se pudo conectar en este momento');
    }
});

document.getElementById('guardarButtonRegister')?.addEventListener('click', async function() {
    try {
        const fullnameRegister = document.getElementById('fullnameRegister').value;
        const usernameRegister = document.getElementById('usernameRegister').value;
        const passwordRegister = document.getElementById('passwordRegister').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (passwordRegister !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const data = {
            fullnameRegister: fullnameRegister,
            usernameRegister: usernameRegister,
            passwordRegister: passwordRegister
        };

        //console.log('Enviando datos de registro:', data); 

        const response = await fetch('http://localhost:5208/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error('Error en la red al registrar:', response); 
            throw new Error('Error al registrarse');
        }

        const result = await response.json();
        //console.log('Respuesta de registro recibida:', result); 
        alert('Registro exitoso');

    } catch (error) {
        console.error('Error durante el registro:', error.message); 
        alert('No se puedo conectar en este momento');
    }
});

        //cambiar todos los .then por async y await, usar try catch, mejorar los mensajes para saber que está pasando exactamente conforme a solicitudes del usuario, buscar como poner los mensajes para programador de consola
