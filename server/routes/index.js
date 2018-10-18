'use strict'

var express = require('express');
var MainController = require('../controllers/main');

var api = express.Router();

api.get('/get-login-id', MainController.getLogin);
api.get('/get-corridas-id/:salida/:llegada/:id/:fecha', MainController.getCorridas);
api.get('/get-asientos-disp', MainController.getAsientosDisp);
api.get('/get-origenes-destinos', MainController.getOrigenesDestinosEr);
api.get('/get-bloquear-asientos', MainController.getBloquearAsientos);
api.get('/get-vender-boletos', MainController.getVenderBoletos);

module.exports = api;
