import mongoose from 'mongoose';

const tiposPermitidos = ['Arma', 'Armadura', 'Amuleto'];

const itemMagicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: {
    type: String,
    enum: tiposPermitidos,
    required: true
  },
  forca: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  defesa: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
});

// validacoes dos pontos
itemMagicoSchema.pre('save', function (next) {
  if (this.tipo === 'Arma' && this.defesa !== 0) {
    return next(new Error('Itens do tipo Arma devem ter defesa 0.'));
  }
  if (this.tipo === 'Armadura' && this.forca !== 0) {
    return next(new Error('Itens do tipo Armadura devem ter força 0.'));
  }
  if (this.forca === 0 && this.defesa === 0) {
    return next(new Error('Item Mágico precisa ter pelo menos força ou defesa.'));
  }
  next();
});

const ItemMagico = mongoose.model('ItemMagico', itemMagicoSchema);
export default ItemMagico;