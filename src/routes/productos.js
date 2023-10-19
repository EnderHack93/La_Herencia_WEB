import { Router } from "express";
import { editarProducto, getActiveProducts, getCrearProductos, postCrearProductos, verCrearProductos, verEditarProducto, verproductostabla } from "../controllers/productos.js";
import { getActiveCategories ,verCrearCategorias} from "../controllers/categorias.js";

const router = Router();
router.get("/",getActiveProducts)
router.get("/products", verproductostabla);
router.get("/crear",verCrearProductos)
router.get("/editar/:id",verEditarProducto)
router.put("/editar/:id",editarProducto)
//router.get("/crear",getCrearProductos)
router.post("/crear",postCrearProductos)
router.get("/categorias",verCrearCategorias)
export {router}