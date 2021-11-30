const controller = require('../controllers/computadoresControllers.js');

server.get('/computadores', controller.computadoresGetAll)
server.get('/computadores/:codigo', controller.computadoresGetById)

server.put('/computadores/:codigo', controller.computadoresEditar)
server.post('/computadores', controller.computadoresNovo)
