function randomDate(date1, date2) {
	function randomValueBetween(min, max) {
		return Math.random() * (max - min) + min;
	}
	var date1 = date1 || '01-01-1970';
	var date2 = date2 || new Date().toLocaleDateString();
	date1 = new Date(date1).getTime();
	date2 = new Date(date2).getTime();
	if (date1 > date2) {
		return new Date(randomValueBetween(date2, date1));
	} else {
		return new Date(randomValueBetween(date1, date2));
	}
}

export const productsArray = [
	{
		name: 'SPIRT YOGA SOFTY SET',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/7-900x900_400x400_crop_center.jpg?v=1529459220',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/21-900x900_dcd6f997-19a7-4f38-be5e-eb2e1ccc9509_400x400_crop_center.jpg?v=1531152117',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 889,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['hiking', 'football', 'running', 'basketball'],
		colors: ['red', 'blue', 'green', 'black'],
		company: 'asics',
		date: randomDate('02/13/2013', '01/01/2000'),
	},

	{
		name: 'SNEAKERS SPORT RUNNING',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/5-900x900_1bbac911-f81f-4274-9c08-cdd7a370bcc1_400x400_crop_center.jpg?v=1530124805',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/1-900x900_a1aed45e-b6a9-42f7-be81-f2fc7b6dac67_400x400_crop_center.jpg?v=1530125312',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 1124,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['hiking', 'football', 'running', 'basketball'],
		colors: ['red', 'blue', 'green', 'black'],
		company: 'asics',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'SNEAKERS SPORT RUNNING',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/18-900x900_400x400_crop_center.jpg?v=1530125532',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/26-900x900_cc62dc44-c052-41a5-8f81-52e71198864f_300x300_crop_center.jpg?v=1530125982',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 43,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['hiking', 'running'],
		colors: ['red', 'blue', 'green', 'black'],
		company: 'asics',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'jOGGERS FOR ALL AGES',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/18-900x900_400x400_crop_center.jpg?v=1530125532',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/26-900x900_cc62dc44-c052-41a5-8f81-52e71198864f_300x300_crop_center.jpg?v=1530125982',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 285,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		categories: ['hiking', 'football', 'running'],
		colors: ['black'],
		company: 'asics',
		date: randomDate('02/13/2013', '01/01/2000'),
	},

	{
		name: 'LACED JOGGERS FOR MEN',
		image: 'https://cdn.sportsshoes.com/product/B/BRO2386/BRO2386_400_1.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/B/BRO2543/BRO2543_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 234,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'new-arrivals',
		categories: ['hiking', 'football', 'running'],
		colors: ['black'],
		company: 'rebook',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'PRO FOOTBALL SHOES',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/26-900x900_cc62dc44-c052-41a5-8f81-52e71198864f_300x300_crop_center.jpg?v=1530125982',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/13-900x900_964b520b-1729-4f97-b610-f9a27f6aa39e_300x300_crop_center.jpg?v=1530125640',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 345,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'new-arrivals',
		categories: ['hiking', 'football'],
		colors: ['red'],
		company: 'rebook',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'AIR FORCE 1',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/1-900x900_a1aed45e-b6a9-42f7-be81-f2fc7b6dac67_400x400_crop_center.jpg?v=1530125312',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/13-900x900_964b520b-1729-4f97-b610-f9a27f6aa39e_300x300_crop_center.jpg?v=1530125640',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 123,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'new-arrivals',
		categories: ['hiking', 'football'],
		colors: ['red'],
		company: 'puma',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'VOLCANO SNEAKERS',
		image:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/18-900x900_600x600_crop_center.jpg?v=1530125532',
		secImage:
			'https://cdn.shopify.com/s/files/1/0052/8164/4662/products/1-900x900_a1aed45e-b6a9-42f7-be81-f2fc7b6dac67_400x400_crop_center.jpg?v=1530125312',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'new-arrivals',
		categories: ['hiking'],
		colors: ['blue'],
		company: 'puma',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Adrenaline GTS 22',
		image: 'https://cdn.sportsshoes.com/product/B/BRO2477/BRO2477_400_1.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/B/BRO2453/BRO2453_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'trending',
		categories: ['hiking'],
		colors: ['green'],
		company: 'puma',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Gel-Kinsei Blast',
		image: 'https://cdn.sportsshoes.com/product/B/BRO2451/BRO2451_400_1.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/A/ASI12437/ASI12437_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'trending',
		categories: ['football'],
		colors: ['blue'],
		company: 'nike',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Clifton 8 Running Shoes',
		image: 'https://cdn.sportsshoes.com/product/I/INO1919/INO1919_400_5.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/N/NEW693918/NEW693918_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'trending',
		categories: ['running'],
		colors: ['blue', 'green'],
		company: 'nike',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Clifton 8 Running Shoes',
		image: 'https://cdn.sportsshoes.com/product/I/INO1919/INO1919_400_5.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/N/NEW693918/NEW693918_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['basketball'],
		colors: ['red', 'black'],
		company: 'nike',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Glycerin 20 Running Shoes',
		image: 'https://cdn.sportsshoes.com/product/B/BRO2529/BRO2529_400_1.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/B/BRO2480/BRO2480_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'trending',
		colors: ['green'],
		company: 'adidas',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Glycerin 20 Running Shoes',
		image: 'https://cdn.sportsshoes.com/product/S/SAU4547/SAU4547_400_8.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/S/SAU4546/SAU4546_400_8.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['hiking', 'football', 'running', 'basketball'],
		colors: ['black'],
		company: 'adidas',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
	{
		name: 'Glycerin 20 Running Shoes',
		image: 'https://cdn.sportsshoes.com/product/I/INO2057/INO2057_400_8.jpg',
		secImage: 'https://cdn.sportsshoes.com/product/A/ASI12436/ASI12436_400_1.jpg',
		description:
			'Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikons newly announced D3 professional digital SLR camera to offer serious photographers...',
		price: 80,
		sizeInStock: [
			{ size: 40, stockCount: 22 },
			{ size: 42, stockCount: 24 },
			{ size: 44, stockCount: 58 },
		],
		status: 'best-seller',
		categories: ['football'],
		colors: ['blue'],
		company: 'adidas',
		date: randomDate('02/13/2013', '01/01/2000'),
	},
];
