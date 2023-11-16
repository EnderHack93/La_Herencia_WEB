import fetch from "node-fetch";
import axios from "axios";
import { getActiveCategories } from "../controllers/categorias.js";
const getActiveProducts = async (req, res) => {
  try {
    const response = await fetch("https://herencia-api.onrender.com/productos");

    if (!response.ok) {
      throw new Error("Error al obtener datos de la API");
    }

    const responseData = await response.json();

    if (!Array.isArray(responseData)) {
      throw new Error("Los datos de la API no son válidos");
    }

    res.render("productos", { data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno en el servidor");
  }
};

const getCrearProductos = async (req, res) => {
  res.render("crearProductos");
};
//post de crear productos
export const axiosPostCrearProductos = async (req, res) => {

  const { nombre, descripcion, precio, id_categoria } = req.body;
  const imagen = req.files.find((f) => f.fieldname === "imagen");

  const imgBlob = new Blob([imagen.buffer]);
  const formData = new FormData();
  formData.append("imagen", imgBlob,imagen.originalname);
  formData.append("nombre", nombre);
  formData.append("descripcion", descripcion);
  formData.append("precio", precio);
  formData.append("id_categoria", id_categoria);

  axios.post("https://herencia-api.onrender.com/productos",formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
   })
   .then((response) => {
     res.redirect('/products');
   })
   .catch((error) => {
     res.send(error.response.data);
   });;
  
};
const postCrearProductos = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen, id_categoria } = req.body;

    const response = await fetch(
      "https://herencia-api.onrender.com/productos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          imagen,
          id_categoria,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("La solicitud a la API falló");
    }

    const data = await response.json();

    console.log("estos son los datitos", data);
    res.status(200).json(data); // Otra opción: enviar la respuesta JSON a tu cliente web.
  } catch (error) {
    console.error("Error al hacer la solicitud a la API:", error);
    res.status(500).json({ error: "Hubo un error en la solicitud a la API" }); // Manejar errores en la respuesta al cliente web.
  }
};
const verproductostabla = async (req, res) => {
  try {
    const response = await fetch("https://herencia-api.onrender.com/productos");

    if (!response) {
      throw new Error("Error al obtener datos de la API");
    }

    const status = response.status;

    if (status !== 200) {
      throw new Error("Error al obtener datos de la API");
    }

    const responseData = await response.json();

    if (!Array.isArray(responseData)) {
      throw new Error("Los datos de la API no son válidos");
    }

    const productos = responseData; // Obtiene el array de productos

    const categorias = await getActiveCategories(); // Obtiene el array de categorías

    res.render("productosadmin", { productos, categorias });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno en el servidor");
  }
};

const verCrearProductos = async (req, res) => {
  try {
    const response = await fetch("https://herencia-api.onrender.com/productos");

    if (!response) {
      throw new Error("Error al obtener datos de la API");
    }

    const status = response.status;

    if (status !== 200) {
      throw new Error("Error al obtener datos de la API");
    }

    const responseData = await response.json();

    if (!Array.isArray(responseData)) {
      throw new Error("Los datos de la API no son válidos");
    }

    const productos = responseData; // Obtiene el array de productos

    const categorias = await getActiveCategories(); // Obtiene el array de categorías

    res.render("formularioCrearProducto", { productos, categorias });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno en el servidor");
  }
};

const editarProducto = async (req, res) => {
  const imgBlob = new Blob([imagen.buffer]);
  const { nombreeditar,descripcioneditar,precioeditar,id_categoriaeditar,imageneditar,idProducto} = req.body;
  const formData = new FormData();;
  formData.append("nombre", nombreeditar);
  formData.append("descripcion", descripcioneditar);
  formData.append("precio", precioeditar);
  formData.append("id_categoria", id_categoriaeditar);
  formData.append("imageneditar", imgBlob,imageneditar.originalname);
  
   console.log(formData)
  axios.put("https://herencia-api.onrender.com/categorias/${idProducto}",formData,{
    headers: {
      
      "Content-Type": "multipart/form-data",
    }
   })
   .then((response) => {
     res.send(response.data);
   })
   .catch((error) => {
     res.send(error.response.data);
   });;
};
const verEditarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    res.render("editarProducto");
  } catch (error) {}
};

export {
  verEditarProducto,
  editarProducto,
  getActiveProducts,
  getCrearProductos,
  postCrearProductos,
  verCrearProductos,
  verproductostabla,
};
