// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Roscos de Vino",
        descripcion: "Deliciosos roscos esponjosos con un toque de vino tinto. Ingredientes: Harina de trigo, azúcar, huevo, vino tinto, aceite de girasol, levadura, canela y ajonjolí.",
        precio: 12.50,
        categoria: "tradicional",
        imagen: "imagenes/roscos-vino.jpeg",
        alergenos: ["Gluten", "Huevo", "Sésamo (ajonjolí)"],
        destacado: true
    },
    {
        id: 2,
        nombre: "Tiramisú",
        descripcion: "Clásico postre italiano con capas de café y mascarpone. Ingredientes: Queso mascarpone, huevos, azúcar, café, bizcochos de soletilla, cacao en polvo y licor de café (opcional).",
        precio: 15.90,
        categoria: "tradicional",
        imagen: "imagenes/tiramisu.jpg",
        alergenos: ["Gluten", "Huevo", "Lacteos", "Cafeína"],
        destacado: true
    },
    {
        id: 3,
        nombre: "Polvorones",
        descripcion: "Tradicionales polvorones de almendra, esponjosos y sabrosos. Ingredientes: Harina de trigo, azúcar, almendra molida, canela, ajonjolí, limón y manteca de cerdo.",
        precio: 9.90,
        categoria: "navideno",
        imagen: "imagenes/polvorones.jpeg",
        alergenos: ["Gluten", "Frutos secos (almendra)", "Sésamo (ajonjili)", "Sulfitos"],
        destacado: true
    },
    {
        id: 4,
        nombre: "Mantecados",
        descripcion: "Clásicos mantecados de canela, suaves y aromáticos. Ingredientes: Harina de trigo, azúcar, manteca de cerdo, canela, ajonjolí y limón.",
        precio: 8.50,
        categoria: "navideno",
        imagen: "imagenes/mantecados.jpeg",
        alergenos: ["Gluten", "Sésamo (ajonjili)", "Sulfitos"],
        destacado: false
    },
    {
        id: 5,
        nombre: "Tronco de Navidad",
        descripcion: "Delicioso bizcocho enrollado con crema de chocolate. Ingredientes: Huevos, azúcar, harina de trigo, cacao en polvo, nata para montar, chocolate negro y azúcar glass.",
        precio: 24.90,
        categoria: "navideno",
        imagen: "imagenes/tronco de navida.jpeg",
        alergenos: ["Gluten", "Huevo", "Lacteos", "Frutos secos (puede contener trazas)"],
        destacado: true
    },
    {
        id: 6,
        nombre: "Galletas de Jengibre",
        descripcion: "Divertidas galletas con forma de muñeco de jengibre. Ingredientes: Harina de trigo, miel, azúcar moreno, mantequilla, huevo, jengibre, canela, clavo y bicarbonato.",
        precio: 10.50,
        categoria: "navideno",
        imagen: "imagenes/galletas gengibre.jpeg",
        alergenos: ["Gluten", "Huevo", "Lacteos"],
        destacado: false
    },
    {
        id: 7,
        nombre: "Turrón Artesanal",
        descripcion: "Turrón blando de almendra con miel de la mejor calidad. Ingredientes: Almendra tostada, miel, azúcar, clara de huevo, oblea y canela.",
        precio: 18.90,
        categoria: "navideno",
        imagen: "imagenes/turron artesanal.jpeg",
        alergenos: ["Frutos secos (almendra)", "Huevo", "Gluten (trazas)"],
        destacado: true
    },
    {
        id: 8,
        nombre: "Magdalenas Caseras",
        descripcion: "Esponjosas magdalenas caseras con toque de limón, recién horneadas. Ingredientes: Harina de trigo, azúcar, huevos, aceite de girasol, leche, ralladura de limón, levadura y azúcar glass.",
        precio: 7.90,
        categoria: "tradicional",
        imagen: "imagenes/macdalenas.jpeg",
        alergenos: ["Gluten", "Huevo", "Lacteos"],
        destacado: false
    },
    {
        id: 9,
        nombre: "Roscón de Reyes",
        descripcion: "Especialidad navideña rellena de nata y decorada con fruta confitada. Ingredientes: Harina de trigo, huevos, azúcar, mantequilla, leche, ralladura de naranja, agua de azahar, almendras y fruta confitada.",
        precio: 22.90,
        categoria: "navideno",
        imagen: "imagenes/rosconreyes.jpeg",
        alergenos: ["Gluten", "Huevo", "Lacteos", "Frutos secos (almendra)", "Sulfitos (fruta confitada)"],
        destacado: true
    },
    {
        id: 10,
        nombre: "Hojaldrinas",
        descripcion: "Delicadas pastas de hojaldre espolvoreadas con azúcar glass. Ingredientes: Harina de trigo, mantequilla, agua, sal y azúcar glass.",
        precio: 11.50,
        categoria: "tradicional",
        imagen: "imagenes/hojaldrinas.jpeg",
        alergenos: ["Gluten", "Lacteos"],
        destacado: false
    }
];

// Variables globales
let carrito = [];
let filtroActual = 'todos';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    inicializarFiltros();
    inicializarNavbar();
    inicializarFormularioContacto();
    inicializarAnimaciones();
});

// Cargar productos en la página
function cargarProductos() {
    const productosGrid = document.querySelector('.productos-grid');
    if (!productosGrid) return;

    // Filtrar productos según el filtro actual
    let productosFiltrados = [];
    if (filtroActual === 'todos') {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(producto => producto.categoria === filtroActual);
    }

    // Generar el HTML de los productos
    let html = '';
    productosFiltrados.forEach((producto, index) => {
        // Crear iconos de alérgenos con tooltips
        const alergenosHTML = producto.alergenos.map(alergeno => {
            let icono = 'fa-exclamation-triangle'; // Icono por defecto
            let tooltip = alergeno;
            
            // Asignar iconos específicos según el tipo de alérgeno
            if (alergeno.toLowerCase().includes('gluten')) {
                icono = 'fa-bread-slice';
                tooltip = 'Contiene gluten';
            } else if (alergeno.toLowerCase().includes('huevo')) {
                icono = 'fa-egg';
                tooltip = 'Contiene huevo';
            } else if (alergeno.toLowerCase().includes('lacteo')) {
                icono = 'fa-cheese';
                tooltip = 'Contiene lácteos';
            } else if (alergeno.toLowerCase().includes('fruto') || alergeno.toLowerCase().includes('almendra')) {
                icono = 'fa-seedling';
                tooltip = 'Contiene frutos secos';
            } else if (alergeno.toLowerCase().includes('sésamo') || alergeno.toLowerCase().includes('ajonjil')) {
                icono = 'fa-seedling';
                tooltip = 'Contiene sésamo';
            } else if (alergeno.toLowerCase().includes('sulfito')) {
                icono = 'fa-wine-bottle';
                tooltip = 'Contiene sulfitos';
            } else if (alergeno.toLowerCase().includes('cafeína')) {
                icono = 'fa-coffee';
                tooltip = 'Contiene cafeína';
            }
            
            return `<div class="alergeno-tooltip">
                <i class="fas ${icono}" title="${tooltip}"></i>
                <span class="tooltip-text">${tooltip}</span>
            </div>`;
        }).join('');
        
        const esNuevo = producto.destacado ? '<span class="etiqueta-nuevo">Destacado</span>' : '';
        
        // Formatear la descripción para mostrar ingredientes en un párrafo separado
        const descripcionPartes = producto.descripcion.split(' Ingredientes: ');
        const descripcionCorta = descripcionPartes[0];
        const ingredientes = descripcionPartes.length > 1 ? descripcionPartes[1] : '';
        
        html += `
            <div class="producto animar retraso-${index % 3}" data-categoria="${producto.categoria}">
                ${esNuevo}
                <div class="producto-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
                <div class="producto-info">
                    <div class="producto-cabecera">
                        <span class="producto-categoria">${producto.categoria === 'navideno' ? '🎄 Navideño' : '🍰 Tradicional'}</span>
                        <div class="alergenos">${alergenosHTML}</div>
                    </div>
                    <h3>${producto.nombre}</h3>
                    <p class="descripcion">${descripcionCorta}</p>
                    ${ingredientes ? `<div class="ingredientes"><strong>Ingredientes:</strong> ${ingredientes}</div>` : ''}
                    <div class="alergenos-lista">
                        <strong>Alérgenos:</strong> ${producto.alergenos.join(', ')}
                    </div>
                    <div class="producto-precio">
                        <span class="precio">${producto.precio.toFixed(2)} €</span>
                        <button class="btn-carrito" data-id="${producto.id}" aria-label="Añadir ${producto.nombre} al carrito">
                            <i class="fas fa-shopping-cart"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    productosGrid.innerHTML = html;
    
    // Agregar eventos a los botones del carrito
    document.querySelectorAll('.btn-carrito').forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

// Inicializar los filtros de categoría
function inicializarFiltros() {
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover la clase active de todos los botones
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            
            // Agregar la clase active al botón clickeado
            boton.classList.add('active');
            
            // Actualizar el filtro actual y recargar productos
            filtroActual = boton.dataset.categoria;
            cargarProductos();
        });
    });
}

// Inicializar la barra de navegación
function inicializarNavbar() {
    const header = document.querySelector('header');
    const menuLinks = document.querySelectorAll('nav a');
    
    // Cambiar el header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Smooth scroll para los enlaces del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Cerrar el menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// Inicializar el formulario de contacto
function inicializarFormularioContacto() {
    const formulario = document.querySelector('.formulario-contacto');
    if (!formulario) return;
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        const formData = new FormData(formulario);
        const datos = Object.fromEntries(formData);
        
        // Simular envío exitoso
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        formulario.reset();
    });
}

// Inicializar animaciones
function inicializarAnimaciones() {
    // Configurar el Intersection Observer para las animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animar');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con la clase 'animar'
    document.querySelectorAll('.animar').forEach(elemento => {
        observer.observe(elemento);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.id === id);
    
    if (productoEnCarrito) {
        // Si ya está en el carrito, incrementar la cantidad
        productoEnCarrito.cantidad += 1;
    } else {
        // Si no está en el carrito, agregarlo
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    // Mostrar notificación
    mostrarNotificacion(`¡${producto.nombre} añadido al carrito!`);
    
    // Actualizar el contador del carrito
    actualizarContadorCarrito();
    
    // Guardar en localStorage
    guardarCarrito();
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    
    // Estilos para la notificación
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = '#27ae60';
    notificacion.style.color = 'white';
    notificacion.style.padding = '15px 25px';
    notificacion.style.borderRadius = '5px';
    notificacion.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    notificacion.style.zIndex = '1000';
    notificacion.style.transform = 'translateY(100px)';
    notificacion.style.opacity = '0';
    notificacion.style.transition = 'all 0.3s ease-out';
    
    document.body.appendChild(notificacion);
    
    // Animación de entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateY(0)';
        notificacion.style.opacity = '1';
    }, 100);
    
    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateY(100px)';
        notificacion.style.opacity = '0';
        
        // Eliminar el elemento después de la animación
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (!contador) return;
    
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    contador.textContent = totalItems;
    contador.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar el carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }
}

// Inicializar todo cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar productos y funcionalidades
    cargarProductos();
    inicializarFiltros();
    inicializarNavbar();
    inicializarFormularioContacto();
    inicializarAnimaciones();
    cargarCarrito();
    
    // Forzar la recarga de los productos después de un breve retraso
    setTimeout(() => {
        cargarProductos();
    }, 100);
});
