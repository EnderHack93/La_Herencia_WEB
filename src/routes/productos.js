import { Router } from "express";
import { editarProducto, getActiveProducts, getCrearProductos, postCrearProductos, verCrearProductos, verEditarProducto } from "../controllers/productos.js";

const router = Router();
router.get("/",getActiveProducts)
router.get("/products",verCrearProductos)
router.get("/editar/:id",verEditarProducto)
router.put("/editar/:id",editarProducto)
//router.get("/crear",getCrearProductos)
router.post("/crear",postCrearProductos)
export {router}