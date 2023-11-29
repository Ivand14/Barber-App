const mercadopago = require("mercadopago");

const dotenv = require('dotenv')
dotenv.config()
const{ACCESS_TOKEN} = process.env

mercadopago.configure({
	access_token:`${ACCESS_TOKEN}`,
})

const mercadoPago = (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/home",
			"failure": "http://localhost:5173/home",
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});

	return res.status(200).json('Compra realizada con exito')
};

module.exports = mercadoPago