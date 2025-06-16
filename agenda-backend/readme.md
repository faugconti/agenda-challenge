# Backend 

**This is the backend for the "Agenda" project. Made using the following technologies:**

**Language:** Javascript (node.js)

**Framework:** Express.js

**Database:** SQL - SQLite3 (DBMS) + Sequelize (ORM) for development

**Architecture:** REST API


### ENDPOINTS
#### Contacts


| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/contacts`                          | Retrieve all contacts                    |
| `GET`    | `/api/contacts/:id`                      | Retrieve a specific contact by it's id   |
| `POST`   | `/api/contacts`                          | Create a new contact                     |
| `PUT`    | `/api/contacts/:id`                      | Update a specific contact by it's id     |
| `DELETE` | `/api/contacts/:id`                      | Delete a specific contact by it's id     |

#### Provinces

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/provinces`                         | Retrieve all provinces                   |

### Dependencies
* [Node](https://nodejs.org/en/download) 

or
* [docker](https://docs.docker.com/engine/install/)
### How to run 
#### standalone

```
git clone https://github.com/faugconti/agenda-challenge 
cd agenda-backend
npm install
mv .env.example .env                #renames to .env
node index.js
```
#### Docker container
```
mv .env.example .env                #renames to .env
docker image build -t agenda_back .
source .env && docker run -p $BACKEND_PORT:$BACKEND_PORT -e PORT=$BACKEND_PORT agenda_back:latest
```

#### Environment variables
change variables inside _(.env.example)_ if needed and rename to .env before executing above
```
BACKEND_PORT=3000     # Port used for running server
SEED_DB=true          # for database initialization
```
