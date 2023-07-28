alert("Presione registrarse para ingresar su nombre y su edad")



function datos(nombre, edad){
    let nombreUsuario = prompt("Ingresa tu nombre")
    let edadUsuario = prompt("Ingresa tu edad")

    if(edadUsuario >= 18){
        alert("Puedes consumir marihuana")
    }else{
        alert("No puedes consumir marihuana")
    }
}