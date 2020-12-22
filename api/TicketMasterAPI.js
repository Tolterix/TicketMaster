
const fs = require("fs")
const bodyParser = require("body-parser")
const cors = require('cors');
const express = require('express')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors());

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
*/
app.post('/auth', (req, res) => {
	const {email, password} = req.body

	//validate user has .mil address with regex
	
	//res.cookie('email', email);
	//serverCookies.push(email);
	let userObj = {
		id: 0,
		groups: [],
		firstName: '',
		lastName: '',
		email: ''
	}
	
	//get userid and user info
	knex
		.select('id', 'email', 'first_name', 'last_name')
		.from('users')
		.where('email', '=', email)
	.then(userInfo => {
		userObj.id = userInfo[0].id
		userObj.email = userInfo[0].email
		userObj.firstName = userInfo[0].first_name
		userObj.lastName = userInfo[0].last_name
	})
	//get array of group ids
	.then(() => {
		knex
			.select('group_members.group_id', 'groups.name')
			.from('group_members')
			.join('groups', 'groups.id', 'group_members.group_id')
			.where('user_id', '=', userObj.id)
		.then(arrayOfGroups => {
			arrayOfGroups.forEach(groupID => {
				userObj.groups.push({id: groupID.group_id, name: groupID.name, parent: '', children: [], categories: []})
			})
		})
		//
		.then(() => {
			knex
				.select('id', 'name', 'parent_id')
				.from('groups')
			.then(groups => {
				userObj.groups.forEach(userGroup => {
					let tObj = groups.filter(i => i.id == userGroup.id)
					if (tObj[0].parent_id != null) {
						let nObj = groups.filter(i => i.id == tObj[0].parent_id)
						userObj.groups = userObj.groups.filter(i => i != userGroup)
						tGroup = {...userGroup, parent: nObj[0].name}
						userObj.groups.push(tGroup)
					}
				})
				userObj.groups.forEach(userGroup => {
					let tObj = groups.filter(i => i.parent_id == userGroup.id)
					tObj.forEach(child => {
						let index = userObj.groups.indexOf(userGroup)
						userObj.groups[index].children.push(child.name)
					})
				})
			})
			//get parent id and name of groups
			.then(() => {
				knex
					.select('name', 'id', 'parent_id')
					.from('groups')
					.where('id', 'in', userObj.groups.map(i => i.id))
				.then(groupsInfo => {
					userObj.groups.map(group => {
						groupsInfo.forEach(j => {
							if (group.id == j.id) {
								userObj.parent = {name: j.name, id: j.parent_id}
							}
						})
					})
				})
				//get group categories
				.then(() => {
					knex
						.select('id', 'group_id', 'name')
						.from('group_categories')
						.where('group_id', 'in', userObj.groups.map(i => i.id))
					.then(groupCats => {
						userObj.groups.map(group => {
							groupCats.forEach(j => {
								if (group.id == j.group_id) {
									let tempCats = group.categories
									tempCats.push({id: j.id, name: j.name})
								}
							})
						})
					})
					//get group children
					.then(() => {
						knex
							.select('id', 'name')
							.from('groups')
							.where('parent_id', '=', userObj.id)
						.then(childArr => {
							userObj.children = childArr.map(child => {
								return {id: child.id, name: child.name}
							})
						})
						.then(() => {
							res.status(200).send(JSON.stringify(userObj));
						})
					})
				})
			})
		})
	})

	//load group categories into state

	//res.cookie('password', password);
	//serverCookies.push(password);
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














