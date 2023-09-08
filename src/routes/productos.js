import { Router } from "express";
import { getActiveProducts } from "../controllers/productos.js";

const router = Router();
router.get("/",getActiveProducts)

export {router}