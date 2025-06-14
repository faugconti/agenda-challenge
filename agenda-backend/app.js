require('dotenv').config();
const express = require('express');
const contactRoutes = require('./routes/contactos');
const provincesRoutes = require('./routes/provincias');
const { notFound: routeHandler } = require('./middlewares/wrongRouteHandler');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/api/provinces', provincesRoutes);
app.use('/api/contacts', contactRoutes);
app.use(routeHandler);
app.use(errorHandler);

module.exports = app;