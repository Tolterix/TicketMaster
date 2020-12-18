CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE groups(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    parent_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE group_categories(
    id INT NOT NULL AUTO_INCREMENT,
    group_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group_id) REFERENCES groups (id)
);

CREATE TABLE group_members(
    id INT NOT NULL AUTO_INCREMENT,
    group_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group_id) REFERENCES groups (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE tickets(
    id INT NOT NULL AUTO_INCREMENT,
    guid VARCHAR(64) NOT NULL,
    status INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category_id INT NOT NULL,
    submitted_by INT NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (id),
	FOREIGN KEY (category_id) REFERENCES group_categories (id),
    FOREIGN KEY (submitted_by) REFERENCES users (id)
);

CREATE TABLE ticket_assignments(
	id INT NOT NULL AUTO_INCREMENT,
	ticket_id INT NOT NULL,
	assignee_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (ticket_id) REFERENCES tickets (id),
	FOREIGN KEY (assignee_id) REFERENCES users (id)
);

CREATE TABLE ticket_updates(
    id INT NOT NULL AUTO_INCREMENT,
    ticket_id INT NOT NULL,
    description TEXT NOT NULL,
    updated_by INT NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (ticket_id) REFERENCES tickets (id),
    FOREIGN KEY (updated_by) REFERENCES users (id)
);
