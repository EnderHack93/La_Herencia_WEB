import fetch from 'node-fetch';
import axios from "axios";
const getActiveClients = async (req, res) => {
  try {
    const response = await fetch('https://herencia-api.onrender.com/personas');

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

    const personas = responseData; // Obtiene el array de categorías

    return personas;
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno en el servidor');
  }
};
const verCClientes = async (req, res) => {

    const personas = await getActiveClients(); // Obtiene el array de categorías

    res.render('clientes', { personas });

};
 const axiosPostCrearcategorias = async (req, res) => {
  const { nombre} = req.body;
  const formData = new FormData();
  formData.append("nombre", nombre);
   console.log(formData)
  axios.post("https://herencia-api.onrender.com/categorias",formData,{
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
export {getActiveClients,verCClientes};