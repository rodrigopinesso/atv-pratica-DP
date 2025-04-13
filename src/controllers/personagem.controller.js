import personagemService from '../services/personagem.service.js';

const personagemController = {
    async criar(req, res) {
      try {
        const personagem = await personagemService.criarPersonagem(req.body);
        res.status(201).json(personagem);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    },
  
    async listar(req, res) {
      const personagens = await personagemService.listarPersonagens();
      res.json(personagens);
    },
  
    async buscarPorId(req, res) {
      try {
        const personagem = await personagemService.buscarPorId(req.params.id);
        res.json(personagem);
      } catch (err) {
        res.status(404).json({ erro: err.message });
      }
    },
  
    async atualizarNomeAventureiro(req, res) {
      try {
        const personagem = await personagemService.atualizarNomeAventureiro(req.params.id, req.body.nomeAventureiro);
        res.json(personagem);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    },
  
    async remover(req, res) {
      try {
        await personagemService.removerPersonagem(req.params.id);
        res.status(204).send();
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    },
  
    async adicionarItem(req, res) {
      try {
        const personagem = await personagemService.adicionarItem(req.params.personagemId, req.params.itemId);
        res.json(personagem);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    },
  
    async listarItens(req, res) {
      try {
        const itens = await personagemService.listarItensDoPersonagem(req.params.id);
        res.json(itens);
      } catch (err) {
        res.status(404).json({ erro: err.message });
      }
    },
  
    async buscarAmuleto(req, res) {
      try {
        const amuleto = await personagemService.buscarAmuleto(req.params.id);
        res.json(amuleto);
      } catch (err) {
        res.status(404).json({ erro: err.message });
      }
    },
  
    async removerItem(req, res) {
      try {
        const personagem = await personagemService.removerItem(req.params.personagemId, req.params.itemId);
        res.json(personagem);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
    }
  };
  
export default personagemController;