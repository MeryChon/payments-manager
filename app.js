const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const paymentRoutes = require('./api/routes/payments');

mongoose.connect('mongodb+srv://admin:' + 
	process.env.MONGO_ATLAS_PW + '@payments-manager-ivnxu.mongodb.net/test?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

app.use(bodyParser.urlencoded({extended: false})); //TODO: maybe true?
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
		return res.status(200).json({});
	}

	next();
});

app.use('/payments', paymentRoutes);



//If code reached this line, an invalid path has been passed
app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;