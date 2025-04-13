import itemService from '../services/item.service.js';

const itemController = {
  async criar(req, res) {
    try {
      const item = await itemService.criarItem(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async listar(req, res) {
    try {
      const itens = await itemService.listarItens();
      res.json(itens);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await itemService.buscarItemPorId(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  },
};

export default itemController;