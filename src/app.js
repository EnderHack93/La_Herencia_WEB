import express from "express";
import { router } from "./routes/productos.js";


const app = express();



app.set('view engine', 'ejs');
app.use(express.static('public'));
//app.set('views',"../src/views/");
app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log('server UP! en http://localhost:3000');
  });