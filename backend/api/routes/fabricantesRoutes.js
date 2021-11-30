const controller = require('../controllers/fabricantesControllers.js');

server.get('/fabricantes', controller.fabricantesGetAll)
server.get('/fabricantes/:codigo', controller.fabricantesGetById)

server.put('/fabricantes/:codigo', controller.fabricantesEditar)
server.post('/fabricantes', controller.fabricantesNovo)
