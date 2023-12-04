import fetch from 'node-fetch';
import axios from "axios";
import FormData from 'form-data';
import { guardarTokenEnSesion } from '../controllers/authController.js';

const verLogin = async (req, res) => {
    res.render('login');
};

const axiosPostLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const response = await axios.post("https://herencia-api.onrender.com/session/login", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        const token = response.data.token;
        console.log(token)
        // Guarda el token en la sesión utilizando el controlador de autenticación
        guardarTokenEnSesion(req, token);
        console.log("Este es el token:", token);
        res.redirect("/indexadmin");
    } catch (error) {
        console.log(error)
    }
};

export { verLogin, axiosPostLogin };
