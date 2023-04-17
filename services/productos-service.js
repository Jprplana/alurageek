// GET
const listaProductos = () => {
   return fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error));
};

const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => {
    return respuesta.json();
  });
};
//POST
const crearProducto = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fué posible crear un producto");
  });
};
//EXPORTS
export const productosService = {
  listaProductos,
  listarUnProducto,
  crearProducto,
};
