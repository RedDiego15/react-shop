const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hola mi server en express');
});

app.get('/products', (req, res) => {
	res.json([
		{
			name: 'product 1',
			price: 20,
		},
		{
			name: 'product 2',
			price: 40,
		},
	]);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		name: 'product 1',
		price: 20,
	});
});

app.get('/categories/:categorieId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({
		categoryId,
		productId,
		name: 'product 1',
		price: 20,
	});
});

app.listen(port, () => {
	console.log('listening on port 3000');
});
