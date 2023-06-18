import jsonwebtoken from 'jsonwebtoken';
import AsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const protect = AsyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const secretKey = process.env.TOKEN_SECRET;
			const decoded = jsonwebtoken.verify(token, secretKey);
			req.user = await User.findById(decoded.id).select('-password');
			next();
		} catch (err) {
			res.status(401);
			throw new Error('auroziaed token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('not autorized no token');
	}
});
