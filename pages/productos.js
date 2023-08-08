// Definir el array de productos
const productos = [
    { nombre: 'OG Kush', precio: 800 },
    { nombre: 'Wedding Cake', precio: 850 },
    { nombre: 'Afgani', precio: 1000 },
    { nombre: 'Scout Cookies', precio: 900 },
    { nombre: 'Critical', precio: 700 }
];

// Carrito de compras
const carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    total += precio;
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito.length = 0;
    total = 0;
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const precioTotal = document.getElementById('precio-total');

    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
        carritoLista.appendChild(li);
    });

    precioTotal.textContent = `Total: $${total}`;
}

// Función para cambiar la vista de los productos
function cambiarVistaProductos() {
    const filtroSeleccion = document.getElementById('filtro-seleccion').value;

    if (filtroSeleccion === 'filtroNombre') {
        const nombreBusqueda = prompt('Ingrese el nombre del producto:');
        if (nombreBusqueda) {
            const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase()));
            mostrarProductos(productosFiltrados);
        }
    } else if (filtroSeleccion === 'filtroPrecio') {
        const productosOrdenados = productos.slice().sort((a, b) => a.precio - b.precio);
        mostrarProductos(productosOrdenados);
    } else {
        mostrarProductos(productos);
    }
}

// Función para mostrar los productos
function mostrarProductos(productosArray) {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productosArray.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';

        const img = document.createElement('img');
        img.src = `../assets/img/${producto.nombre.toLowerCase().replace(/\s/g, '_')}.jpg`;
        img.alt = producto.nombre;
        divProducto.appendChild(img);

        const pNombre = document.createElement('p');
        pNombre.textContent = `${producto.nombre} - $${producto.precio}`;
        divProducto.appendChild(pNombre);

        const button = document.createElement('button');
        button.textContent = 'Agregar al Carrito';
        button.onclick = () => agregarAlCarrito(producto.nombre, producto.precio);
        divProducto.appendChild(button);

        productosDiv.appendChild(divProducto);
    });
}

// Mostrar los productos inicialmente
mostrarProductos(productos);
