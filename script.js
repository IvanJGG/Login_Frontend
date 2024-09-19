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

       

        const response = await fetch('http://localhost:5208/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error('Error al registrar:', response); 
            throw new Error('Error al registrarse');
        }

        const result = await response.json();
        
        alert('Registro exitoso');

    } catch (error) {
        console.error('Error durante el registro:', error.message); 
        alert('No se pudo conectar en este momento');
    }
});

