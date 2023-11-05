import express from "express";
import { router } from "./routes/productos.js";
import bodyParser from "body-parser";
import multer from "multer";


const upload = multer();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(upload.any());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
//app.set('views',"../src/views/");

app.use(router);

app.listen(3000, () => {
  console.log("server UP! en http://localhost:3000");
});
