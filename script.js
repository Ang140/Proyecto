document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Por favor, verifica que no eres un robot.");
        return;
    }

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('color').value;

    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = `
        <h3>Datos Guardados:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellidos:</strong> ${lastname}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Color Favorito:</strong> <span style="color:${color};">${color}</span></p>
    `;

    // Mostrar botones de acción
    document.getElementById('actionButtons').style.display = 'block';

    // Desactivar el formulario para evitar cambios accidentales
    disableForm();
});

document.getElementById('editBtn').addEventListener('click', function() {
    // Permitir editar el formulario
    enableForm();
    // Ocultar botones de acción mientras se edita
    document.getElementById('actionButtons').style.display = 'none';
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    if (confirm("¿Estás seguro de que deseas borrar este registro?")) {
        // Limpiar los datos y ocultar la salida
        document.getElementById('dataForm').reset();
        document.getElementById('output').style.display = 'none';
        document.getElementById('actionButtons').style.display = 'none';
        grecaptcha.reset(); // Reinicia el reCAPTCHA
    }
});

function disableForm() {
    document.getElementById('name').disabled = true;
    document.getElementById('lastname').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('color').disabled = true;
}

function enableForm() {
    document.getElementById('name').disabled = false;
    document.getElementById('lastname').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('color').disabled = false;
}

