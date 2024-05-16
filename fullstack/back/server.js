const express = require('express');
const mongoose = require('mongoose');
const  cors = require('cors')
const app = express();
const port = 8080;
app.use(cors())
 
app.use(express.json());

mongoose.connect('mongodb+srv://tu8dhdtwy:elnur123@cluster0.5vyouju.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const productSchema = new mongoose.Schema({
  title: String,  
  image: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/api/product',  (req, res) => { 
  const { title, image, description, price } = req.body;
  const product = new Product({ title, image, description, price });
    product.save();
  res.send(product);
});

app.get('/api/product', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) { 
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.get('/api/product/:id', async (req, res) => { 
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.put('/api/product/:id', async (req, res) => {
  const { title, image, description, price } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.id, { title, image, description, price }, { new: true });
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.delete('/api/product/:id', async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.id });
      if (!product) return res.status(404).send('Product not found');
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });