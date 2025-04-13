import mongoose from 'mongoose';

const classesPermitidas = ['Guerreiro', 'Mago', 'Arqueiro', 'Ladino', 'Bardo'];

const personagemSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  nomeAventureiro: { type: String, required: true },
  classe: {
    type: String,
    enum: classesPermitidas,
    required: true
  },
  level: { type: Number, default: 1 },
  forca: { type: Number, required: true },
  defesa: { type: Number, required: true },
  itensMagicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemMagico' }]
});

// validacao pontos
personagemSchema.pre('save', function (next) {
  const total = this.forca + this.defesa;
  if (total > 10) {
    return next(new Error('A soma de Força e Defesa deve ser no máximo 10.'));
  }
  next();
});

const Personagem = mongoose.model('Personagem', personagemSchema, 'personagem');
export default Personagem;