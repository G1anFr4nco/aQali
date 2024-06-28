const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'); // Importar http para Socket.IO
const socketIo = require('socket.io'); // Importar Socket.IO

const app = express();
const server = http.createServer(app); // Crear servidor HTTP
const io = socketIo(server); // Configurar Socket.IO en el servidor HTTP
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear application/json
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/aQali', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error al conectar con MongoDB', err));

// Definir el esquema y modelo de Producto
const productoSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
  fechaIngreso: String,
  fechaVencimiento: String,
  codigo: String,
  proveedor: String
});

const Producto = mongoose.model('Producto', productoSchema);

// Ruta para obtener todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    console.error('Error al obtener productos', err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Ruta para agregar un nuevo producto
app.post('/api/productos', async (req, res) => {
  const nuevoProducto = new Producto(req.body);

  try {
    await nuevoProducto.save();
    // Emitir evento a todos los clientes cuando se agrega un producto
    io.emit('productoAgregado', nuevoProducto);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    console.error('Error al agregar producto', err);
    res.status(400).json({ error: 'Error al agregar producto' });
  }
});

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
