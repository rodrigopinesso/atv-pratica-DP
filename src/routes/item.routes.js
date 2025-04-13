import express from 'express';
import itemController from '../controllers/item.controller.js';

const router = express.Router();

router.post('/', itemController.criar);
router.get('/', itemController.listar);
router.get('/:id', itemController.buscarPorId);

export default router;