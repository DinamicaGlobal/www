function mostrarFechaHora() {
            const ahora = new Date();

            // Formato de la fecha: Mes, Día y Año
            const mesNombre = new Intl.DateTimeFormat('es-MX', { month: 'long' }).format(ahora);
            const dia = ahora.getDate();
            const anio = ahora.getFullYear();
            const fechaFormateada = `${mesNombre} ${dia}, ${anio}`;

            // Formato de la hora: 24 horas
            const hora = ahora.getHours().toString().padStart(2, '0');
            const minutos = ahora.getMinutes().toString().padStart(2, '0');
            const horaFormateada = `${hora}:${minutos}`;

            // Combinar fecha y hora
            const resultado = `Recuperada: ${fechaFormateada}, hora: ${horaFormateada}.`;

            // Mostrar el resultado en el elemento HTML
            document.getElementById('fecha-hora').textContent = resultado;
        }

        // Llama a la función para mostrar la fecha y hora al cargar la página
        mostrarFechaHora();

        // Opcional: Actualizar la fecha y hora cada segundo
        setInterval(mostrarFechaHora, 1000);
