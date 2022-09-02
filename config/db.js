const mongoose = require('mongoose');
require('dotenv').config();

const conectDB = async () => {
	const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dg4wm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
	try {
		await mongoose.connect(uri);

		console.log('DB conectado');
	} catch (error) {
		console.log(error);
		process.exit(1); // Detenemos la app
	}
};

module.exports = conectDB;
