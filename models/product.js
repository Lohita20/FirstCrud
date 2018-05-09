const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
	item:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	size:{
		type: Number,
		required: true
	},
	brand:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const product = module.exports = mongoose.model('Product', productSchema);

// Get Products
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

// Update Product
module.exports.updateProduct = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		item: product.item,
		category: product.category,
		size: product.size,
		brand: product.brand,
		price: product.price,
		image_url: product.image_url,
		buy_url: product.buy_url
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

// Delete Product
module.exports.removeProduct = (id, callback) => {
	var query = {_id: id};
	Product.remove(query, callback);
}
