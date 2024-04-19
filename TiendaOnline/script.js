import productos from "./producto.js";
const main = document.querySelector(".contenedor-json");

function crearTarjetaProductos(productos) {
  productos.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto";

    //agregar contenido dentro de la tarjeta

    nuevoProducto.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img class="imagen" src="${producto.imagen}" alt="${producto.nombre}">
      <p>Precio: ${producto.precio}</p>
      <p>Características: ${producto.caracteristicas.join(", ")}</p>
      <p>Procesador: ${producto.procesador}</p>
      <p>Almacenamiento: ${producto.almacenamiento.tipo} - ${
      producto.almacenamiento.capacidad
    }</p>
      <p>Sistema Operativo: ${producto.sistema_operativo}</p>
    `;

    main.appendChild(nuevoProducto);
  });
}

crearTarjetaProductos(productos);
