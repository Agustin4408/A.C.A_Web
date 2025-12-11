
        // LÓGICA DEL MENÚ MÓVIL
        const hamburger = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            // Abrir/Cerrar menú
            navLinks.classList.toggle('active');
            
            // Cambiar ícono (de Rayitas a X)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Forzar color azul cuando está abierto (fondo blanco)
                hamburger.classList.add('active-icon');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.classList.remove('active-icon');
            }
        });

        // Cerrar menú al tocar un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.classList.remove('active-icon');
            });
        });
        
        // ... (resto de scripts) ...