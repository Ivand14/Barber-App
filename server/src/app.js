const express = require('express')
const server = express()
const morgan = require('morgan')
const cors = require('cors')
const Router = require('./routes/index')
const mercadopago = require("mercadopago");

const dotenv = require('dotenv')
dotenv.config()
const{ACCESS_TOKEN} = process.env

mercadopago.configure({
	access_token:`${ACCESS_TOKEN}`,
})

server.use(express.json())
server.use(morgan('dev'))
server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));

server.use('/',Router)

server.post("/create_preference", (req, res) => {

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
});

server.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});



module.exports = server