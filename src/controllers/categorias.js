import fetch from 'node-fetch';

const getActiveCategories = async (req, res) => {
  try {
    const response = await fetch('https://churrasqueriaherencia.onrender.com/categoriasA');

    if (!response) {
      throw new Error('Error al obtener datos de la API');
    }

    const status = response.status;

    if (status !== 200) {
      throw new Error('Error al obtener datos de la API');
    }

    const responseData = await response.json();

    if (!Array.isArray(responseData.categorias)) {
      throw new Error('Los datos de la API no son válidos');
    }

    const categorias = responseData.categorias; // Obtiene el array de categorías

    return categorias;
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno en el servidor');
  }
};
const verCrearCategorias = async (req, res) => {
  



   
    

    const categorias = await getActiveCategories(); // Obtiene el array de categorías

    res.render('crear categoria', { categorias });

};

export {getActiveCategories,verCrearCategorias};
