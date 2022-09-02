// Rutas para producto

const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

// api

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
