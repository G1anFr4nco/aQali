const mongoose = require('mongoose');

const entregaSchema = new mongoose.Schema({
  idProducto: Number,
  cantidad: Number,
  fecha: String
});

const Entrega = mongoose.model('Entrega', entregaSchema);

module.exports = Entrega;
