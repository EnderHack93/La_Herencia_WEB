import { Router } from "express";
import { axiosPostCrearProductos, editarProducto, getActiveProducts, getCrearProductos, postCrearProductos, verCrearProductos, verEditarProducto, verproductostabla } from "../controllers/productos.js";
import { getActiveCategories ,verCrearCategorias,axiosPostCrearcategorias} from "../controllers/categorias.js";
import { getActiveClients ,verCClientes} from "../controllers/clientes.js";

const router = Router();
router.get("/",getActiveProducts)
router.get("/products", verproductostabla);
router.get("/crear",verCrearProductos)
router.get("/editar/:id",verEditarProducto)
router.put("/editar/:id",editarProducto)
//router.get("/crear",getCrearProductos)
router.post("/productos",axiosPostCrearProductos)

//categorias
router.get("/categorias",verCrearCategorias)
router.post("/crearcategorias",axiosPostCrearcategorias)
//clientes
router.get("/clientes",verCClientes)

export {router}