const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
	try {
		let product;

		product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).send('Hubo un error');
	}
};

exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (err) {
		console.log(err);
		res.status(500).send('Hubo un error');
	}
};

exports.getProductById = async (req, res) => {
	try {
		let product = await Product.findById(req.params.id);

		if (!product) {
			res.status(400).json({ msg: 'No existe el producto' });
		}

		res.status(200).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).send('Hubo un error');
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const { name, category, slug } = req.body;
		let product = await Product.findById(req.params.id);

		if (!product) {
			res.status(400).json({ msg: 'No existe el producto' });
		}

		product.name = name;
		product.category = category;
		product.slug = slug;

		product = await Product.findByIdAndUpdate({ _id: req.params.id }, product, {
			new: true,
		});

		res.status(200).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).send('Hubo un error');
	}
};
exports.deleteProduct = async (req, res) => {
	try {
		let product = await Product.findById(req.params.id);

		if (!product) {
			res.status(400).json({ msg: 'No existe el producto' });
		}
		await Product.findOneAndRemove({ _id: req.params.id });
		res.status(200).json({ msg: 'Producto eliminado con éxito' });
	} catch (err) {
		console.log(err);
		res.status(500).send('Hubo un error');
	}
};
