# agenda-challenge
Asignación Técnica - Agenda de contactos


### Dependencies needed to run both projects
[docker](https://docs.docker.com/engine/install/)

#### How to run

we need to create .env files following the .env.example in both projects
```
mv .env.example .env                                   #rename global .env
mv agenda-frontend/.env.example agenda-frontend/.env   #rename front  .env
mv agenda-backend/.env.example agenda-backend/.env     #rename back   .env
docker-compose up -d
```

