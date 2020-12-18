
const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001


app.use(bodyParser.json())

const knex = require('knex')(require('./knexfile.js')['development']);


/*
	#Setting login
	POST /setlogin
	parameters: email password
	create cookie with email, dont worry about password

	body: {
		email: 'Tyler',
		password: 'TylersPassword'
	}
*/

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

app.post('/setlogin', (req, res) => {
	const {email, password} = req.body

	res.cookie('email', email);
	serverCookies.push(email);

	res.cookie('password', password);
	serverCookies.push(password);

	res.status(200).json({ success: true });
})

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

app.get('/tickets/worker', validateCookie, (req, res) => {
	let {cookies} = req;

	let userID = knex.raw(`select id from users where email = ${cookies.email}`)
	let groupID = knex.raw(`select group_id from group_members where user_id = ${userID}`)
	let categoryID = knex.raw(`select id from group_categories where group_id in ${groupID}`)
	let ticketInfo = knex.raw(`select id,created_at,title,guid from tickets where category_id in ${categoryID}`)
	let ticketID = knex.raw(`select id from tickets where category_id in ${categoryID}`)
	let maxTicketID = knex.raw(`select ticket_id,MAX(updated_at) from ticket_updates where ticket_id in ${ticketID} group by ticket_id `)

	//[{created_at, updated_at, title, guid}]

})

/*
	#get specific ticket details
	GET /tickets/details
	parameter: id
	filter through the tickets, ticket_updates, and ticket_assignments tables
	for that specific tickets details
*/

app.get()

/*
	#get tickets that I have submitted
	GET /tickets/customer
	filter the tickets table by submitted_by the user who requests and return
	the timestamp, title, and id and also query the ticket_updates table for
	the latest timestamp updated for that specific ticket
*/

app.get()

app.post()

app.post()







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


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
















