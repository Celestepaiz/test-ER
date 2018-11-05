'use strict'

var express = require('express');
var MainController = require('../controllers/main');

var api = express.Router();

api.get('/get-login-id', MainController.getLogin);
api.get('/get-corridas-id/:salida/:llegada/:id/:fecha', MainController.getCorridas);
api.get('/get-server-status', MainController.getStatus);

module.exports = api;
