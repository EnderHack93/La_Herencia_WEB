import { Router } from "express";
import { axiosPostCrearProductos, editarProducto, getActiveProducts, getCrearProductos, postCrearProductos, verCrearProductos, verEditarProducto, verproductostabla } from "../controllers/productos.js";
import { getActiveCategories ,verCrearCategorias,axiosPostCrearcategorias} from "../controllers/categorias.js";
import { axiosPostCrearCliente ,verCClientes} from "../controllers/clientes.js";
import {verIndex} from "../controllers/indexcontroller.js";
import { verPedidos} from "../controllers/pedidos.js";
import { verCupones,axiosPostCrearCupon} from "../controllers/cupon.js";
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
router.post("/crearClientes",axiosPostCrearCliente)
//indexadmin
router.get("/indexadmin",verIndex)
//pedidos
router.get("/pedidos",verPedidos)
//cupones
router.get("/cupones",verCupones)
router.post("/crearcupones",axiosPostCrearCupon)
export {router}