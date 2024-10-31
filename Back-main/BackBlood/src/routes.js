const express = require('express');
const controllerDoador = require('./controllers/controllerDoador');
const controllerHemonucleo = require('./controllers/controllerHemonucleo');
const contrellerDoacao = require('./controllers/contrellerDoacao');
const controllerSms = require('./controllers/controllerSMS')
const routes = express.Router();

// Rotas do Doador

routes.get('/doador', controllerDoador.getDoador);
routes.get('/doadorespecifico' , controllerDoador.specifydoador);
routes.post('/doadorcreate',  controllerDoador.createDoador);
routes.put('/doadorupdate', controllerDoador.updateDoador);
routes.delete('/doadordel', controllerDoador.deleteDoador);

// Rotas do Hemonucleo
routes.get('/hemonucleo' , controllerHemonucleo.getHemonucleo);
routes.get('/hemonucleoespecifico' , controllerHemonucleo.specificyhemonucleo)
routes.delete('/hemonucleodel' , controllerHemonucleo.deleteHemonucleo);
routes.put('/hemonucleoupdate' , controllerHemonucleo.updateHemonucleo);
routes.post('/hemonucleocreate' , controllerHemonucleo.createHemonucleo);

// Rotas da Doação
routes.get('/doacao' , contrellerDoacao.getDoacao);
routes.get('/doacaoespecifica' , contrellerDoacao.specifydoacao);


// Rotas do SMS
routes.post('/sms', controllerSms.sendSMS);




module.exports = routes;
