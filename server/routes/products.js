import express from "express";
import * as controller from '../controller/products.js'

const router = express.Router();

router.get('/', controller.getAll)
router.get('/:pid', controller.getDetaill) // 🌟기억!!

export default router;