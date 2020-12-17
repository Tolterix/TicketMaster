
const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001


app.use(bodyParser.json())

const knex = require('knex')(require('./knexfile.js')['development']);


/*
	body: {
		username: 'Tyler',
		password: 'TylersPassword'
	}
*/
app.post('/setlogin', (req, res) => {
	const {username, password} = req.body
	
	
})

app.get()

app.get()

app.get()

app.post()

app.post()







app.post('/register', (req, res) => {
	const {email, password, first_name, last_name} = req.body
	
	knex('users')
		.insert({ email: email, password: password, first_name: first_name, last_name: last_name})
		.then(data => {
			res.status(200).json(data)
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
})








app.get('/emails', (req, res) => {
	knex
		.select('*')
		.from('emails')
		.then(data => {
			res.status(200).json(data)
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
})

app.get('/emails/:id', (req, res) => {
	knex('emails')
		.where({id: req.params.id})
		.then(data => {
			res.status(200).json(data)
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
	
	
})
//     /emails/:id is accessed through http://localhost:3001/emails/3

app.get('/search',(req,res) => {
	const query = Object.keys(req.query)[0]
	
	knex
		.select('*')
		.from('emails')
		.where('subject', 'like', `%${query}%`)
		.then(data => {
			res.status(200).json(data)
		})
		.catch(err => {
			console.log(err);
			res.status(404).json(err);
		});
    
});

app.post('/send',function(req,res){
	const {sender, recipient, subject, message, date} = req.body;
	
	let nextId;
	
	knex('emails')
		.max('id')
		.then(maxId => {
			knex('emails')
				.insert({ id: (maxId[0].max+1), sender: sender, recipient: recipient, subject: subject, message: message, date: date})
				.then(data => {
					res.status(200).json(data)
				})
				.catch(err => {
					console.log(err);
					res.status(404).json(err);
				});
		});
	
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
















