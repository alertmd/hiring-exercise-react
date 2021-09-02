import 'babel-polyfill';
import 'source-map-support/register';

import {readdirSync} from 'fs';
import express from 'express';
import bodyParser from 'body-parser';

//https://expressjs.com/en/4x/api.html
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//load app specific endpoints
const endpoints = readdirSync('./src/endpoints');

for (const endpoint_file of endpoints) {
	if (endpoint_file.endsWith('.js')) {
		const default_fn = require(`./endpoints/${endpoint_file}`).default;

		if (!default_fn) {
			throw new Error(`${endpoint_file} does not export a default function for loading endpoints`);			
		} else {
			default_fn(app);
		}
	}
}

//region Catch alls

//Catch bad api routes
app.get('*', function(req, res) {
	res.status(404);
	res.send({error: 'That api endpoint does not exist'});
});

//If exception thrown, tell the client
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('error', {
		message: err.message,
		error: err,
	});
});

//endregion

app.listen(3001, () => {
	console.log('Tic-Tac-Toe API listening at http://127.0.0.1:3001');
});
