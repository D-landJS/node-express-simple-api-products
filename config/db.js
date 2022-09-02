const mongoose = require('mongoose');
require('dotenv').config();

const conectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_MONGO);

		console.log('DB conectado');
	} catch (error) {
		console.log(error);
		process.exit(1); // Detenemos la app
	}
};

module.exports = conectDB;
