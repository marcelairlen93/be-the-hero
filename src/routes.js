const express = require('express');
const OngValidator = require('./validators/OngValidator');
const SessionValidator = require('./validators/SessionValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionValidator.Create, SessionController.create);

routes.get('/profile', ProfileValidator.Index, ProfileController.index);

routes.get('/incidents', IncidentValidator.Index, IncidentController.index);

routes.post('/incidents', IncidentValidator.Create, IncidentController.create);

routes.delete('/incidents/:id', IncidentValidator.Delete, IncidentController.delete);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngValidator.Create, OngController.create);

module.exports = routes;
