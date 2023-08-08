/*alert("Aprete comprar y seleccione la cantidad de gramos que quiere llevar")


const precio = 400


function precioTotal(gramos){
    
    const CANTIDADGRAMOS = prompt("Cuantos gramos quieres llevar?")
    let total = parseInt(CANTIDADGRAMOS) * precio
    alert("El total de tu compra es: "+ total)
}

*/


/*
class Producto{
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    descripcion(){
        return "id: " + this.id+ 
                " nombre: " + this.nombre+
                " precio: " + this.precio
    }
}


class Carrito{
    constructor(){
        this.Carrito = []
    }

    agregar(producto){
        this.Carrito.push(producto)
    }
    mostrarProductos(){
        this.Carrito.forEach(89)
    }
}



class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(Producto){
        this.listaProductos.push(Producto)
    }

    buscarProductoporID(id){
        this.listaProductos.find(producto => producto.id == id)
    }




    

    mostrarProductos(){
        this.listaProductos.forEach(producto => {
            console.log(producto.descripcion())
        })
    }
}


const CP = new ProductoController()
CP.agregar(new Producto(1, "Orange Kush", 800, 1))
CP.agregar(new Producto(2, "Wedding Cake", 800, 1))
CP.agregar(new Producto(3, "Afgani", 800, 1))
CP.agregar(new Producto(4, "Apple Cookies", 800, 1))
CP.agregar(new Producto(5, "Critical", 800, 1))


const CARRITO = new Carrito()

let rta

do{
    CP.mostrarProductos()
    let opcion = Number(prompt("Ingrese el codigo del producto que desea agregar"))
    let producto = CP.buscarProductoPorID(opcion)
    CARRITO.agregar(producto)

    rta = prompt("Ingrese 'ESC' para finalizar").toUpperCase()
}while(rta != "ESC ")

*/


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
