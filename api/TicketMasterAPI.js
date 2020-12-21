
const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001


app.use(bodyParser.json())

const knex = require('knex')(require('./knexfile.js')['development']);
/*
var serverCookies = [];
function validateCookie(req, res, next) {
	if (!req.cookies) {
		let {cookies} = req;
		if ('email' in cookies && 'password' in cookies) {
			
			if (serverCookies.includes(cookies.email) && serverCookies.includes(cookies.password)) {
				next();
			} else {
				res.status(403).send({'succeeded': 'false', 'error': 'cookie mismatch on server'});
			}
		} else {
			res.status(403).send({'succeeded': 'false', 'error': 'no cookie'});
		}
	}
	next();
}

app.post('/auth', (req, res) => {
	const {email, password} = req.body

	//res.cookie('email', email);
	//serverCookies.push(email);
	
	let userID = knex
		.select('id')
		.from('users')
		.where('email', '=', email);

	//res.cookie('password', password);
	//serverCookies.push(password);

	res.status(200).json({ success: true, userID: userID });
})
*/
/*
	#get tickets that I can view as worker
	GET /tickets/worker
	select id from users where email = cookies.email
	select group_id from group_members where user_id = ^^^

	filter through the group_member table to get all groups by user id
	is a part of and then
	filter the group_categories for those ids and then 
	filter tickets by those categories and returning just the
	
	timestamps, title, id and also query the ticket_updates table for the latest timestamp
	updated for that specific ticket
*/
//http://localhost:3000/tickets?userID=1
app.get('/tickets', /*validateCookie,*/ (req, res) => {
	let {userID, status, view} = req.query
	//let {cookies} = req;
	let filters = 'TRUE';
	function wipeFilter() {
		if (filters === 'TRUE') {
			filters = '';
		}
	}
	if (status !== undefined) {
		wipeFilter();
		switch(status) {
			case 0:  {}
			case 1:  {}
			case 2:  {}
			default: {break;} 
		}
	}
	
	console.log(filters)
	if (view == 1) {
		knex
			.select('group_id')
			.from('group_members')
			.where('user_id', '=', userID)
		.then(i => {
			groups = i.map(j => j.group_id);
			return knex
				.select('id')
				.from('group_categories')
				.where('group_id', 'in', groups)
		}).then(i => {
			categories = i.map(j => j.id)
			return knex
				.select('tickets.id', 'tickets.status', 'tickets.title',
					'tickets.description', 'tickets.category_id',
					'tickets.submitted_by', 'tickets.created_at',
					'tickets.updated_at')
				.from('tickets')
				.whereRaw(filters + ` and category_id in (${categories})`)
		}).then(i => {
			res.send({tickets: i});
		})
	} else {
		knex
			.select('tickets.id', 'tickets.status', 'tickets.title',
				'tickets.description', 'tickets.category_id',
				'tickets.submitted_by', 'tickets.created_at',
				'tickets.updated_at')
			.from('tickets')
			.whereRaw(filters + ` and tickets.submitted_by = ${userID}`)
		.then(i => {
			res.send({tickets: i});
		})
	}
})

app.get('/userProfile', /*validateCookie,*/ (req, res) => {
	
})

/*
	#get specific ticket details
	GET /tickets/details
	parameter: id
	filter through the tickets, ticket_updates, and ticket_assignments tables
	for that specific tickets details
*/


app.get('tickets/details', /*validateCookie,*/ (req, res) => {
	//request.params using ??
})

/*
	#submit a new ticket
	POST /tickets/new
	BODY parameters: user group category title description
	add new ticket with newly generated guid status of new, and auto fill the timestamp
	when updating tickets in the ticket_update table, make sure to update the updated_at in the tickets table
*/

//app.post()

/*
	#updating a ticket
	POST /ticket/update
	BODY parameters: ticket_id  description updated_by
	update the ticket_updates table with the parameters given
*/

//app.post()



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))






















/*

app.post('/register', (req, res) => {
	const {email, password, first_name, last_name} = req.body
	
	knex
		.select('*')
		.from('users')
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


*/














