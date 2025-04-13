import Personagem from '../models/Personagem.js';
import ItemMagico from '../models/ItemMagico.js';

const criarPersonagem = async (dados) => {
  if (dados.forca + dados.defesa > 10) {
    throw new Error('soma da força e defesa não pode ser maior que 10');
  }
  const personagem = new Personagem(dados);
  return await personagem.save();
};

const listarPersonagens = async () => {
  return await Personagem.find().populate('itensMagicos');
};

const buscarPorId = async (id) => {
  const personagem = await Personagem.findById(id).populate('itensMagicos');
  if (!personagem) throw new Error('personagem não encontrado');

  const forcaExtra = personagem.itensMagicos.reduce((soma, item) => soma + item.forca, 0);
  const defesaExtra = personagem.itensMagicos.reduce((soma, item) => soma + item.defesa, 0);

  return {
    ...personagem.toObject(),
    forcaTotal: personagem.forca + forcaExtra,
    defesaTotal: personagem.defesa + defesaExtra
  };
};

const atualizarNomeAventureiro = async (id, nomeAventureiro) => {
  const personagem = await Personagem.findByIdAndUpdate(
    id,
    { nomeAventureiro },
    { new: true }
  ).populate('itensMagicos');
  if (!personagem) throw new Error('personagem não encontrado');
  return personagem;
};

const removerPersonagem = async (id) => {
  const personagem = await Personagem.findByIdAndDelete(id);
  if (!personagem) throw new Error('personagem não encontrado');
  return personagem;
};

const adicionarItem = async (personagemId, itemId) => {
  const personagem = await Personagem.findById(personagemId).populate('itensMagicos');
  const item = await ItemMagico.findById(itemId);

  if (!personagem || !item) throw new Error('personagem ou item não encontrado');

  if (item.tipo === 'Amuleto') {
    const jaTemAmuleto = personagem.itensMagicos.some(i => i.tipo === 'Amuleto');
    if (jaTemAmuleto) throw new Error('personagem já possui um amuleto');
  }

  personagem.itensMagicos.push(item._id);
  await personagem.save();

  return await personagem.populate('itensMagicos');
};

const listarItensDoPersonagem = async (id) => {
  const personagem = await Personagem.findById(id).populate('itensMagicos');
  if (!personagem) throw new Error('personagem não encontrado');
  return personagem.itensMagicos;
};

const buscarAmuleto = async (id) => {
  const personagem = await Personagem.findById(id).populate('itensMagicos');
  if (!personagem) throw new Error('personagem não encontrado');

  const amuleto = personagem.itensMagicos.find(item => item.tipo === 'Amuleto');
  if (!amuleto) throw new Error('amuleto não encontrado');

  return amuleto;
};

const removerItem = async (personagemId, itemId) => {
  const personagem = await Personagem.findById(personagemId).populate('itensMagicos');
  if (!personagem) throw new Error('personagem não encontrado');

  personagem.itensMagicos = personagem.itensMagicos.filter(i => i._id.toString() !== itemId);
  await personagem.save();

  return await personagem.populate('itensMagicos');
};

export default {
  criarPersonagem,
  listarPersonagens,
  buscarPorId,
  atualizarNomeAventureiro,
  removerPersonagem,
  adicionarItem,
  listarItensDoPersonagem,
  buscarAmuleto,
  removerItem
};