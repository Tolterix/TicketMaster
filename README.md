# TicketMaster
## **Description**
This app will help the users and technicians of AF IT networks enter and track the status of IT support tickets.
## **Setup**

Users should **clone** this locally. In the project directory, you will need to have **npm or yarn**, **knex**, and **nodemon** packages installed.
### **Postgres Server Startup**
**1.** Start and seed data user data into local Postgres server.  

**2.** In terminal *psql postgres*

*create database ticketdb* 

#exit database

**3.** In project directory, seed the SQL server with the following commands

    npx knex migrate:latest

    npx knex seed:run --specific=seed_1users.js

    npx knex seed:run --specific=seed_2groups.js

    npx knex seed:run --specific=seed_3group_categories.js

    npx knex seed:run --specific=seed_4group_members.js

    npx knex seed:run --specific=seed_5tickets.js

    npx knex seed:run --specific=seed_6ticket_assignments.js

    npx knex seed:run --specific=seed_7ticket_updates.js

### **API Startup**

In API folder within project directory

*npx nodemon TicketMasterAPI.js*

### **Frontend Startup**

Open another terminal, within Frontend folder *npm start* and view it on localhost 3000.

## **Usage**

The user will experience four pages.

1. Login view  - Here the user will enter their username and password
    
2. Profile view  Here the user will see their name, email, and group(s) they belong to.
 
3. Tickets view - Here the user will see the ticket numbers they have submitted, current status, title. description, and when it was created
    
4. Submit ticket view - Here the user can select their parent organization and submit a ticket

## **API Usage**

##### POST PATH/auth => requires {email: '', password: ''} as body parameters
returns userID, email, first name, last name, and groups(w/ parent/children/name/id/categories)

##### GET PATH/tickets => requires userID as query parameter and has optional query parameter of view(0 or 1)
returns all tickets the user has based on view, with 0 showing submitted tickets(default) 1 showing tickets assigned to their groups

##### GET PATH/tickets/details => requires userID as query parameter
returns all ticket updates w/ id, description, updated by and updated at information

## *Credits*

Josiah, Jared, Trevor, Henry
      
