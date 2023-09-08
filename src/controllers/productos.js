
const getActiveProducts = async (req, res)=>{
    const response = await fetch('https://churrasqueriaherencia.onrender.com/activos');

    const data = await response.json();

    res.render('productos',{"data":data});
}
export {getActiveProducts}