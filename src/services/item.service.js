import ItemMagico from '../models/ItemMagico.js';

const criarItem = async (dados) => {
  const item = new ItemMagico(dados);
  return await item.save();
};

const listarItens = async () => {
  return await ItemMagico.find();
};

const buscarItemPorId = async (id) => {
  const item = await ItemMagico.findById(id);
  if (!item) throw new Error('item não encontrado');
  return item;
};

export default {
  criarItem,
  listarItens,
  buscarItemPorId,
};