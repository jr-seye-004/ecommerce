const Product = require('../Models/Product');

// Obtenir tous les produits
exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// Ajouter un nouveau produit
exports.createProduct = async (req, res) => {
  const { name, description, price, category, image } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    image,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// Mise à jour d'un produit
exports.updateProduct = async (req, res) => {
  const { id, name, description, price, category, image } = req.body;

  const product = await Product.findById(id);

  if (product) {
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.image = image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Suppression d'un produit
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
