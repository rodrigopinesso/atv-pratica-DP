import express from 'express';
import personagemController from '../controllers/personagem.controller.js';

const router = express.Router();

router.post('/', personagemController.criar);
router.get('/', personagemController.listar);
router.get('/:id', personagemController.buscarPorId);
router.put('/:id/nomeAventureiro', personagemController.atualizarNomeAventureiro);
router.delete('/:id', personagemController.remover);
router.post('/:personagemId/itens/:itemId', personagemController.adicionarItem);
router.get('/:id/itens', personagemController.listarItens);
router.get('/:id/amuleto', personagemController.buscarAmuleto); 
router.delete('/:personagemId/itens/:itemId', personagemController.removerItem);

export default router;