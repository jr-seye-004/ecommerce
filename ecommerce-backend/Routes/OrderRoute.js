const express = require('express');
const { createOrder, getUserOrders } = require('../Controllers/OrderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/myorders', protect, getUserOrders);

module.exports = router;
