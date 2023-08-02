var carrito = [];
var precioTotal = 0;


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    precioTotal += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    var itemEliminado = carrito.splice(index, 1)[0];
    precioTotal -= itemEliminado.precio;
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    precioTotal = 0;
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoLista = document.getElementById("carrito-lista");
    var precioTotalElemento = document.getElementById("precio-total");

    
    if (carritoLista) {
        carritoLista.innerHTML = "";
        carrito.forEach(function (item, index) {
            var li = document.createElement("li");
            li.textContent = item.nombre + " - $" + item.precio;
            var button = document.createElement("button");
            button.textContent = "Eliminar";
            button.onclick = function () {
                eliminarDelCarrito(index);
            };
            li.appendChild(button);
            carritoLista.appendChild(li);
        });
    }

    precioTotalElemento.textContent = "Total: $" + precioTotal;
}
