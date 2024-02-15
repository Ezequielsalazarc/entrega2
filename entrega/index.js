function calcularCompra() {
    let total = 0;
    let productos = [];  //array para productos

    while (true) {
        const NOMBRE_PRODUCTO = prompt('Ingrese el nombre del producto (usa 0 o no escribas nada para finalizar):');

        if (NOMBRE_PRODUCTO === '0' || NOMBRE_PRODUCTO === null) {
            break;
        }

        const precioProducto = parseFloat(prompt("Ingrese el precio de " +  NOMBRE_PRODUCTO + ":"));

        if (precioProducto && precioProducto >= 0) {
            total += precioProducto;

            // Almacenar producto y precio en el array
            productos.push({
                nombre: NOMBRE_PRODUCTO,
                precio: precioProducto
            });

            console.log("Producto agregado: " + NOMBRE_PRODUCTO + " - $" + precioProducto);
        } else {
            console.log('Precio no válido. Intente de nuevo.');
        }
    }

    ///////////////TOTAL DE LA COMPRA
    console.log("Total de la compra: $" + total);

    /*lista de productos y precios */
    console.log("Lista de productos:");
    for (const producto of productos) {
        console.log(producto.nombre + " - $" + producto.precio);
    }
}

/// Llamo la función
calcularCompra();















