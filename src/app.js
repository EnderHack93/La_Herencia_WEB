import express from "express";
import session from "express-session";
import { router } from "./routes/productos.js";
import bodyParser from "body-parser";
import multer from "multer";

const upload = multer();
const app = express();

// Configuración de express-session
app.use(session({
  secret: 'asf1012210', // Cambia esto a una cadena de texto segura
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Cambia a true si estás en producción y usando HTTPS
    maxAge: 60000, // Duración de la sesión en milisegundos (aquí 1 minuto)
  },
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(upload.any());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(router);

app.listen(3000, () => {
  console.log("server UP! en http://localhost:3000");
});
