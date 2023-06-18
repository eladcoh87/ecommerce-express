import AsyncHandler from 'express-async-handler';
import Wish from '../models/wishModel.js';
import Product from '../models/productModel.js';

//post Method
//add newPrduct
//privart to regluar user

export const addWishProduct = AsyncHandler(async (req, res) => {
	const { productId } = req.body;
	const { id: userId } = req.user;

	if (!productId) {
		res.status(400);

		throw new Error('no prodcutId provided');
	}

	const userWishList = await Wish.findOne({ userId: userId });

	if (!userWishList) {
		res.status(400);
		throw new Error('wishlist not found');
	}

	if (userWishList.products.length === 0) {
		userWishList.products.push(productId);
		const updatedWish = await userWishList.save();
		const findProduct = await Product.findById({ _id: productId });
		console.log(findProduct);
		res.status(201).json({ success: true, message: 'product add to wish list created', wishProduct: findProduct });
	}

	const prodcutExsist = userWishList.products.some((productItem) => productItem._id.toHexString() === productId);

	if (prodcutExsist) {
		res.status(400).json({ success: false, message: 'product aredy in the wishlist' });
	} else {
		userWishList.products.push(productId);
		const updatedWish = await userWishList.save();
		const findProduct = await Product.findById({ _id: productId });
		console.log(findProduct);

		res.status(201).json({ success: true, message: 'product add to wish list created', wishProduct: findProduct });
	}
});

//get Method
//get all prodcut wishlist
//privart to regluar user

export const getAllProducts = AsyncHandler(async (req, res) => {
	const { id: userId } = req.user;

	const userWishList = await Wish.findOne({ userId: userId });

	if (!userWishList) {
		res.status(400);
		throw new Error('wishlist not found');
	}

	if (userWishList.products.length === 0) {
		res.status(201).json({ success: true, message: 'wishList is empty - no products' });
	}

	const mapedProducts = await Promise.all(
		userWishList.products.map(async (productItem) => {
			const product = await Product.findById({ _id: productItem._id });
			return product;
		})
	);

	res.status(201).json({ success: true, message: 'products list', allProductsList: mapedProducts });
});

//delete Method
//delete product wishlist
//privart to regluar user

export const removeWishProduct = AsyncHandler(async (req, res) => {
	const { productId } = req.params;
	const { id: userId } = req.user;

	if (!productId) {
		res.status(400);

		throw new Error('no prodcutId provided');
	}

	const userWishList = await Wish.findOne({ userId: userId });

	if (!userWishList) {
		res.status(400);
		throw new Error('wishlist not found');
	}

	if (userWishList.products.length === 0) {
		res.status(400).json({ success: false, message: 'no product to delete - wish empty' });
	}

	const prodcutExsistIndex = userWishList.products.findIndex(
		(productItem) => productItem._id.toHexString() === productId
	);

	if (prodcutExsistIndex === -1) {
		res.status(400).json({ success: false, message: 'no such product in the wish list' });
	} else {
		userWishList.products.splice(prodcutExsistIndex, 1);
		const updatedWish = await userWishList.save();

		res.status(201).json({ success: success, message: 'product deleted' });
	}
});
