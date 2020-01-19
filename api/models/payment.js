const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	description: String,
	comment: String,
	amount: Number,
	paymentDate: Date,
	category: String // TODO: Category
});

module.exports = mongoose.model('Payment', paymentSchema);