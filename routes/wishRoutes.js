import express from 'express';
import { addWishProduct, getAllProducts, removeWishProduct } from '../controllers/wishControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

//add to wishlist
// need to be protected - regular user

router.post('/product', protect, addWishProduct);

//delet from wishlist
// need to be protected - regular user

router.delete('/product/:productId', protect, removeWishProduct);


//get all products from wishlist
// need to be protected - regular user

router.get('/allproducts', protect, getAllProducts);

export default router;
