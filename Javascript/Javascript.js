// Javascript/Javascript.js
// Script para alternar entre modo claro y oscuro en el dashboard
    // 1. Obtener los elementos clave del DOM
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const body = document.body;

    // 2. Función para alternar entre modo claro y oscuro
    function toggleTheme() {
        // Alternar la clase 'dark-mode' en el body (esto aplica el CSS)
        body.classList.toggle('dark-mode');

        // Actualizar el ícono
        if (body.classList.contains('dark-mode')) {
            // Modo oscuro activado: cambiar a icono de luna
            themeToggleIcon.classList.remove('ion-md-sunny');
            themeToggleIcon.classList.add('ion-md-moon');
            // Opcional: Guardar la preferencia en el navegador
            localStorage.setItem('theme', 'dark');
        } else {
            // Modo claro activado: cambiar a icono de sol
            themeToggleIcon.classList.remove('ion-md-moon');
            themeToggleIcon.classList.add('ion-md-sunny');
            // Opcional: Guardar la preferencia
            localStorage.setItem('theme', 'light');
        }
    }

    // 3. Establecer el tema al cargar la página (opcional, pero recomendado)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme(); 
    }

    // 4. Añadir el Event Listener para el clic
    themeToggleBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        toggleTheme();
    });