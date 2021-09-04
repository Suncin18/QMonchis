const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
})

// Aquí se va a crear el nav dinamico
//Llamamos al JSON para validar el usuario logeado
// let usuariosJSON = JSON.parse(localStorage.getItem("usuarioConectado"));
// Parece que no hace falta declararla nuevamente, ya otro archivo .js la declaró entonces podemos acceder a sus valores
// LLamamos al padre de los elementos
const navPadre = document.getElementById('nav-items');

// Creamos los elementos primero y luego en el switch simplemente le cambiamos sus valores y los habilitamos

// Inicio
let i_inicio = document.createElement('i');
i_inicio.classList.add('fas');
i_inicio.classList.add('fa-door-open');
i_inicio.classList.add('nav-icon');

let a_inicio = document.createElement('a');
a_inicio.innerText = 'Inicio';

let li_inicio = document.createElement('li');
li_inicio.classList.add('nav-text');

a_inicio.appendChild(i_inicio);
li_inicio.appendChild(a_inicio);

// Adm Rest.
let i_admRest = document.createElement('i');
i_admRest.classList.add('fas');
i_admRest.classList.add('fa-utensils');
i_admRest.classList.add('nav-icon');

let a_admRest = document.createElement('a');
a_admRest.innerText = 'Adm Restaurantes';
let li_admRest = document.createElement('li');
li_admRest.classList.add('nav-text');

a_admRest.appendChild(i_admRest);
li_admRest.appendChild(a_admRest);

// Adm Platillos
let i_admPlatillos = document.createElement('i');
i_admPlatillos.classList.add('fas');
i_admPlatillos.classList.add('fa-mortar-pestle');
i_admPlatillos.classList.add('nav-icon');

let a_admPlatillos = document.createElement('a');
a_admPlatillos.innerText = 'Adm Platillos';
let li_admPlatillos = document.createElement('li');
li_admPlatillos.classList.add('nav-text');

a_admPlatillos.appendChild(i_admPlatillos);
li_admPlatillos.appendChild(a_admPlatillos);

// Adm Menu
let i_admMenu = document.createElement('i');
i_admMenu.classList.add('fas');
i_admMenu.classList.add('fa-book-open');
i_admMenu.classList.add('nav-icon');

let a_admMenu = document.createElement('a');
a_admMenu.innerText = 'Adm Menu';
let li_admMenu = document.createElement('li');
li_admMenu.classList.add('nav-text');

a_admMenu.appendChild(i_admMenu);
li_admMenu.appendChild(a_admMenu);

// Pedidos Pagados
let i_admPedidosPagados = document.createElement('i');
i_admPedidosPagados.classList.add('fas');
i_admPedidosPagados.classList.add('fa-money-bill-wave-alt');
i_admPedidosPagados.classList.add('nav-icon');

let a_admPedidosPagados = document.createElement('a');
a_admPedidosPagados.innerText = 'Pedidos Pagados';
let li_admPedidosPagados = document.createElement('li');
li_admPedidosPagados.classList.add('nav-text');

a_admPedidosPagados.appendChild(i_admPedidosPagados);
li_admPedidosPagados.appendChild(a_admPedidosPagados);

// Reservas
let i_admReservas = document.createElement('i');
i_admReservas.classList.add('fas');
i_admReservas.classList.add('fa-address-book');
i_admReservas.classList.add('nav-icon');

let a_admReservas = document.createElement('a');
a_admReservas.innerText = 'Reservas';
let li_admReservas = document.createElement('li');
li_admReservas.classList.add('nav-text');

a_admReservas.appendChild(i_admReservas);
li_admReservas.appendChild(a_admReservas);

// Pedidos
let i_admPedidos = document.createElement('i');
i_admPedidos.classList.add('fas');
i_admPedidos.classList.add('fa-folder-open');
i_admPedidos.classList.add('nav-icon');

let a_admPedidos = document.createElement('a');
a_admPedidos.innerText = 'Pedidos';
let li_admPedidos = document.createElement('li');
li_admPedidos.classList.add('nav-text');

a_admPedidos.appendChild(i_admPedidos);
li_admPedidos.appendChild(a_admPedidos);

// Nuevo Gerente
let i_admNuevoGerente = document.createElement('i');
i_admNuevoGerente.classList.add('fas');
i_admNuevoGerente.classList.add('fa-user-plus');
i_admNuevoGerente.classList.add('nav-icon');

let a_admNuevoGerente = document.createElement('a');
a_admNuevoGerente.innerText = 'Nuevo Gerente';
let li_admNuevoGerente = document.createElement('li');
li_admNuevoGerente.classList.add('nav-text');

a_admNuevoGerente.appendChild(i_admNuevoGerente);
li_admNuevoGerente.appendChild(a_admNuevoGerente);

// Nuevo Restaurante
let i_admNuevoRest = document.createElement('i');
i_admNuevoRest.classList.add('fas');
i_admNuevoRest.classList.add('fa-utensils');
i_admNuevoRest.classList.add('nav-icon');

let a_admNuevoRest = document.createElement('a');
a_admNuevoRest.innerText = 'Nuevo Restaurante';
let li_admNuevoRest = document.createElement('li');
li_admNuevoRest.classList.add('nav-text');

a_admNuevoRest.appendChild(i_admNuevoRest);
li_admNuevoRest.appendChild(a_admNuevoRest);

// Cerrar Sesion
let i_cerrarSesion = document.createElement('i');
i_cerrarSesion.classList.add('fas');
i_cerrarSesion.classList.add('fa-door-open');
i_cerrarSesion.classList.add('nav-icon');

let a_cerrarSesion = document.createElement('a');
a_cerrarSesion.innerText = 'Cerrar Sesión';
let li_cerrarSesion = document.createElement('li');
li_cerrarSesion.classList.add('nav-text');

a_cerrarSesion.appendChild(i_cerrarSesion);
li_cerrarSesion.appendChild(a_cerrarSesion);

// Hacemos la verificación antes de crear los elementos correspondientes
switch(usuariosJSON.rol){

    // Creamos las opciones del nav especificas
    case 'administrador':

        // Inicio
        a_inicio.href = 'inicioSuperAdministrador.html';
        navPadre.appendChild(li_inicio);

        // Adm Rest.
        a_admRest.href = 'admRestDueno.html';
        navPadre.appendChild(li_admRest);

        // Adm Usuarios
        let i_admUsuarios = document.createElement('i');
        i_admUsuarios.classList.add('fas');
        i_admUsuarios.classList.add('fa-address-book');
        i_admUsuarios.classList.add('nav-icon');

        let a_admUsuarios = document.createElement('a');
        a_admUsuarios.innerText = 'Adm Usuarios';
        a_admUsuarios.href = 'admUsuarios.html';

        let li_admUsuarios = document.createElement('li');
        li_admUsuarios.classList.add('nav-text');

        a_admUsuarios.appendChild(i_admUsuarios);
        li_admUsuarios.appendChild(a_admUsuarios);
        navPadre.appendChild(li_admUsuarios);

        // Adm Categorias
        let i_admCategorias = document.createElement('i');
        i_admCategorias.classList.add('fas');
        i_admCategorias.classList.add('fa-receipt');
        i_admCategorias.classList.add('nav-icon');

        let a_admCategorias = document.createElement('a');
        a_admCategorias.innerText = 'Adm Categorías';
        a_admCategorias.href = 'categorias.html';

        let li_admCategorias = document.createElement('li');
        li_admCategorias.classList.add('nav-text');

        a_admCategorias.appendChild(i_admCategorias);
        li_admCategorias.appendChild(a_admCategorias);
        navPadre.appendChild(li_admCategorias);

        // Pedidos Pagados
        a_admPedidosPagados.href = 'admPedidosPagadosDueno.html';
        navPadre.appendChild(li_admPedidosPagados);

        // Reportes
        let i_reportes = document.createElement('i');
        i_reportes.classList.add('fas');
        i_reportes.classList.add('fa-folder-open');
        i_reportes.classList.add('nav-icon');

        let a_reportes = document.createElement('a');
        a_reportes.innerText = 'Reportes';
        a_reportes.href = 'reportesSuperAdm.html';

        let li_reportes = document.createElement('li');
        li_reportes.classList.add('nav-text');

        a_reportes.appendChild(i_reportes);
        li_reportes.appendChild(a_reportes);
        navPadre.appendChild(li_reportes);

        break;

    case 'dueño':

        // Inicio
        a_inicio.href = 'inicioDueno.html';
        navPadre.appendChild(li_inicio);

        // Adm Rest.
        a_admRest.href = 'admRestDueno.html';
        navPadre.appendChild(li_admRest);

        // Adm Platillos
        a_admPlatillos.href = 'admPlatoDueno.html';
        navPadre.appendChild(li_admPlatillos);

        // Adm Menu
        a_admMenu.href = 'admMenuDueno.html';
        navPadre.appendChild(li_admMenu);

        // Pedidos Pagados
        a_admPedidosPagados.href = 'admPedidosPagadosDueno.html';
        navPadre.appendChild(li_admPedidosPagados);

        // Reservas
        a_admReservas.href = 'reservasDueno.html';
        navPadre.appendChild(li_admReservas);

        // Pedidos
        a_admPedidos.href = 'admPedidosDueno.html';
        navPadre.appendChild(li_admPedidos);

        // Nuevo Gerente
        a_admNuevoGerente.href = 'formularioGerente.html';
        navPadre.appendChild(li_admNuevoGerente);

        // Nuevo Restaurante
        a_admNuevoRest.href = 'nuevoRest.html';
        navPadre.appendChild(li_admNuevoRest);

        break;

    case 'gerente':

        // Inicio
        a_inicio.href = 'inicioDueno.html';
        navPadre.appendChild(li_inicio);

        // Adm Rest.
        a_admRest.href = 'admRestDueno.html';
        navPadre.appendChild(li_admRest);

        // Adm Platillos
        a_admPlatillos.href = 'admPlatoDueno.html';
        navPadre.appendChild(li_admPlatillos);

        // Adm Menu
        a_admMenu.href = 'admMenuDueno.html';
        navPadre.appendChild(li_admMenu);

        // Pedidos Pagados
        a_admPedidosPagados.href = 'admPedidosPagadosDueno.html';
        navPadre.appendChild(li_admPedidosPagados);

        // Reservas
        a_admReservas.href = 'reservasDueno.html';
        navPadre.appendChild(li_admReservas);

        // Pedidos
        a_admPedidos.href = 'admPedidosDueno.html';
        navPadre.appendChild(li_admPedidos);

        break;

    case 'cliente':

        // Inicio
        a_inicio.href = 'inicioCliente.html';
        navPadre.appendChild(li_inicio);

        // Metodos de pago
        let i_metodosPago = document.createElement('i');
        i_metodosPago.classList.add('fas');
        i_metodosPago.classList.add('fa-credit-card');
        i_metodosPago.classList.add('nav-icon');

        let a_metodosPago = document.createElement('a');
        a_metodosPago.innerText = 'Métodos de pago';
        a_metodosPago.href = 'mostrarMetodosPago.html';

        let li_metodosPago = document.createElement('li');
        li_metodosPago.classList.add('nav-text');

        a_metodosPago.appendChild(i_metodosPago);
        li_metodosPago.appendChild(a_metodosPago);
        navPadre.appendChild(li_metodosPago);

        // Historial de pedidos
        let i_historialPedidos = document.createElement('i');
        i_historialPedidos.classList.add('fas');
        i_historialPedidos.classList.add('fa-history');
        i_historialPedidos.classList.add('nav-icon');

        let a_historialPedidos = document.createElement('a');
        a_historialPedidos.innerText = 'Historial de pedidos';
        a_historialPedidos.href = 'pedidosPagadosCliente.html';

        let li_historialPedidos = document.createElement('li');
        li_historialPedidos.classList.add('nav-text');

        a_historialPedidos.appendChild(i_historialPedidos);
        li_historialPedidos.appendChild(a_historialPedidos);
        navPadre.appendChild(li_historialPedidos);

        break;

    default:
        console.log("ERROR");
        break;
}

// Cerrar Sesión
a_cerrarSesion.href = 'iniciarSesion.html';
navPadre.appendChild(li_cerrarSesion);