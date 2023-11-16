import fetch from 'node-fetch';
import axios from "axios";
import FormData from 'form-data';
const getcupones = async (req, res) => {
  try {
    const response = await fetch('https://herencia-api.onrender.com/cupones');

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
const verCupones = async (req, res) => {

    const cupones = await getcupones(); // Obtiene el array de categorías

    res.render('cuponesadmin', { cupones });

};
const axiosPostCrearCupon = async (req, res) => {
  const { descuento,usosMaximos} = req.body;
  const formData = new FormData();
  formData.append("porcentajeDescuento", descuento);
  formData.append("usosMaximos",usosMaximos);
  axios.post("https://herencia-api.onrender.com/cupones",formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
   })
   .then((response) => {
     res.redirect('cupones');
   })
   .catch((error) => {
     res.send(error.response.data);
   });;
  
};
export {verCupones,axiosPostCrearCupon};
