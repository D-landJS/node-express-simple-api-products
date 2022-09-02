const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const conectDB = require('./config/db');

const app = express();

// Conectamos a la DB
conectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/products', require('./routes/product'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('Ando corriendo en el puerto ', port);
});
