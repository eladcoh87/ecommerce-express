import mongoose from 'mongoose';

const product = mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'Product'
	},
});

const wishSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		products: [product],
	},
	{ timestamps: true }
);

const Wish = mongoose.model('Wish', wishSchema);

export default Wish;
