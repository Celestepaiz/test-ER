'use strict'

var express = require('express');
var MainController = require('../controllers/main');

var api = express.Router();

api.get('/probando-controlador', MainController.pruebas);
api.get('/get-asientos-disp', MainController.getAsientosDisp)

module.exports = api;
