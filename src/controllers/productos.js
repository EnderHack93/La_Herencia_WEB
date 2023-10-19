import fetch from 'node-fetch';
import { getActiveCategories } from '../controllers/categorias.js';
const getActiveProducts = async (req, res) => {
    try {
      const response = await fetch('https://churrasqueriaherencia.onrender.com/activos');
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const responseData = await response.json();
  
      if (!Array.isArray(responseData)) {
        
        throw new Error('Los datos de la API no son válidos');
      }
  
      res.render('productos', { data: responseData });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno en el servidor');
    }
  };


const getCrearProductos = async (req, res) => {
    res.render('crearProductos')
              


};
//post de crear productos
  const postCrearProductos = async (req, res) => {
    try {
      const { nombre, descripcion, precio, imagencita } = req.body;
  
      const response = await fetch('https://churrasqueriaherencia.onrender.com/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          imagencita,
        }),
      });
  
      if (!response.ok) {
        throw new Error('La solicitud a la API falló');
      }
  
      const data = await response.json();
    
      console.log("estos son los datitos", data);
      res.status(200).json(data); // Otra opción: enviar la respuesta JSON a tu cliente web.
    } catch (error) {
      console.error("Error al hacer la solicitud a la API:", error);
      res.status(500).json({ error: 'Hubo un error en la solicitud a la API' }); // Manejar errores en la respuesta al cliente web.
    }
  };
  const verproductostabla = async (req, res) => {
    try {
      const response = await fetch('http://localhost:4000/activos');
  
      if (!response) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const status = response.status;
  
      if (status !== 200) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const responseData = await response.json();
  
      if (!Array.isArray(responseData)) {
        throw new Error('Los datos de la API no son válidos');
      }
  
      const productos = responseData; // Obtiene el array de productos
  
      const categorias = await getActiveCategories(); // Obtiene el array de categorías
  
      res.render('productosadmin', { productos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno en el servidor');
    }
  };

  const verCrearProductos = async (req, res) => {
    try {
      const response = await fetch('http://localhost:4000/activos');
  
      if (!response) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const status = response.status;
  
      if (status !== 200) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const responseData = await response.json();
  
      if (!Array.isArray(responseData)) {
        throw new Error('Los datos de la API no son válidos');
      }
  
      const productos = responseData; // Obtiene el array de productos
  
      const categorias = await getActiveCategories(); // Obtiene el array de categorías
  
      res.render('formularioCrearProducto', { productos, categorias });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno en el servidor');
    }
  };
  
  
  

  const editarProducto = async (req,res)=>{
    try {
      
    } catch (error) {
      
    }
  }
  const verEditarProducto = async (req,res)=>{
    try {
      const id = req.params.id;
      res.render('editarProducto');
    } catch (error) {
      
    }
  }
  

  
  export {verEditarProducto,editarProducto, getActiveProducts,getCrearProductos,postCrearProductos,verCrearProductos,verproductostabla };
