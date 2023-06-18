import express from 'express';
import { getAllProducts, getSingleProduct } from '../controllers/productControlles.js'

const router = express.Router();



//get all products :

router.get('/allproducts', getAllProducts);

//get single product :

router.get('/singleproduct/:id', getSingleProduct);





export default router;