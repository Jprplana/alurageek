import { productosService } from "../services/productos-service.js";

const nuevoProducto = (name, imageUrl, price, id) => {
  const card = document.createElement("div");
  const contenido = `
    <img src="${imageUrl}" />
    <h3 class="nombre-item" name="name" id="name">${name}</h3>
    <p class="precio-item">$${price}</p>
    <a class="ver-producto-link" href="http://localhost:3000/producto.html?id=${id}">Ver producto</a>
  `;

  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productosService.listaProductos();
    listaProductos.forEach( elemento => {
      productos.appendChild(
        nuevoProducto(
          elemento.name,
          elemento.imageUrl,
          elemento.price,
          elemento.id
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
