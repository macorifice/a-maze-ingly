const express = require('express');

const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const roomController = require('../controller/room.controller');
const objectController = require('../controller/object.controller');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/rooms', roomController.getRooms);
router.get('/room/:id', roomController.getRoom);
router.post('/room', roomController.addRoom);
router.put('/room/:id', roomController.updRoom);
router.delete('/room/:id', roomController.delRoom);

router.get('/objects', objectController.getObjects);
router.get('/object/:id', objectController.getObject);
router.post('/object', objectController.addObject);
router.put('/object/:id', objectController.updObject);
router.delete('/object/:id', objectController.delObject);

module.exports = router;
