const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Payment = require('../models/payment')




router.get('/', (req, res, next) => {
	Payment.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({error: err});
		});
});



router.post('/', (req, res, next) => {
	const payment = new Payment({
		_id: new mongoose.Types.ObjectId(),
		description: req.body.description,
		comment: req.body.comment,
		amount: req.body.amount
	});

	payment
		.save()
		.then(result => {
			res.status(201).json({
				message: 'POST to /payments',
				createdPayment: payment
			});
		})
		.catch(err => res.status(500).json({error: err}));	
});




router.get('/:paymentId', (req, res, next) => {
	const id = req.params.paymentId;
	Payment
		.findById(id)
		.exec()
		.then(doc => {
			if(doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json({message: 'No valid entry found for provided id'})
			}			
		})
		.catch(err => {
			res.status(500).json({error: err});
		});
});



router.put('/:paymentId', (req, res, next) => {
	const id = req.params.paymentId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}

	Payment
		.update({ _id: id }, { $set: updateOps })
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({error: err});
		});
});

router.delete('/:paymentId', (req, res, next) => {
	const id = req.params.paymentId;
	Payment.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({error: err});
		});
	});

module.exports = router;