import AsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//GET Method
//get all products
//public

export const getAllProducts = AsyncHandler(async (req, res) => {
	const products = await Product.find({});

	if (!products) {
		res.status(404);
		throw new Error('products not found');
	}

	res.status(201).json(products);
});

export const getSingleProduct = AsyncHandler(async (req, res) => {
	const productId = req.params.id;
	console.log(productId);
	const product = await Product.findById({ _id: productId });

	if (!product) {
		res.status(404);
		throw new Error('products not found');
	}

	res.status(200).json(product);
});
