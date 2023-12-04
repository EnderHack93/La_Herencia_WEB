

const guardarTokenEnSesion = (req, nuevoToken) => {
    
   const token = nuevoToken;
    req.session.token = nuevoToken; // Puedes usar req.session para almacenar el token en la sesión
    console.log("el token llego"+ nuevoToken)
};

const obtenerTokenDeSesion = (req) => {
    return req.session.token || token;
};



export { guardarTokenEnSesion, obtenerTokenDeSesion};
