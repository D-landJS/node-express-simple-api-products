const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	createDate: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Product', ProductSchema);
