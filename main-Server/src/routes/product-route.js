const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/', productController.findAllproducts);
router.post('/search', productController.selectSearchProducts);
router.get('/:boardCode', productController.findOneProduct);
//router.put('/:boardCode', productController.findOneProduct);
//router.delete('/', productController.deleteProduct);

router.post('/write', productController.insertProduct);

module.exports = router;