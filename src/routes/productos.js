import { Router } from "express";
import { getActiveProducts, getCrearProductos, postCrearProductos } from "../controllers/productos.js";

const router = Router();
router.get("/",getActiveProducts)
router.get("/crear",getCrearProductos)
router.post("/crear",postCrearProductos)
export {router}