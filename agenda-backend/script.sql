DROP DATABASE agenda;

CREATE DATABASE IF NOT EXISTS agenda;
USE agenda;

CREATE TABLE provincias (
    id  int NOT NULL AUTO_INCREMENT,
    nombre varchar(50) UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE contactos(
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(20) NOT NULL,
    apellido varchar(25) NOT NULL,
    telefono varchar(25) NOT NULL,
    id_provincia INT NOT NULL,
    FOREIGN KEY (id_provincia) REFERENCES provincias(id),
    PRIMARY KEY(id)
);


insert into provincias(nombre) values 
('CABA'),
('Buenos Aires'),
('Catamarca'),
('Chaco'),
('Chubut'),
('Cordoba'),
('Corrientes'),
('Entre Ríos'),
('Formosa'),
('Jujuy'),
('La Pampa'),
('La Rioja'),
('Mendoza'),
('Misiones'),
('Neuquén'),
('Río Negro'),
('Salta'),
('San Luis'),
('San Juan'),
('Santa Cruz'),
('Santa Fé'),
('Santiago del Estero'),
('Tierra del Fuego'),
('Tucumán');

insert into contactos(nombre,apellido,telefono,id_provincia) values
('Pedro','Sanchez','3814443333',24);
('Marcos','Ledesma','1112223313',1);
