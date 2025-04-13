const express = require('express');
const multer = require("multer");
const router = express.Router();
const RoutesController = require('../controllers/Admin/routesController');
const { checkJWT, isAdmin } = require('../services/authCheck');
const { route } = require('./clientRoutes');
const ContacController = require('../controllers/Admin/contactController');
const TripsController = require('../controllers/Admin/tripsController');
const BusTypeController = require('../controllers/Admin/busTypeController');
const BusController = require('../controllers/Admin/busController');
const DriverController = require('../controllers/Admin/driverController');

//------------------[ ROUTES ]------------
router.get('/routes/list',RoutesController.get);
router.get('/routes/getId',RoutesController.getById);
router.post('/routes/add',RoutesController.create);
router.patch('/routes/update/:id',RoutesController.update);
router.delete('/routes/delete/:id',RoutesController.delete);

// router.post("/login", AuthController.login);

//------------------[ CONTACT ]-------------
router.get('/contact/list', ContacController.get);
router.get('/contact/getById/:id', ContacController.getById);
router.patch('/contact/update/:id', ContacController.update)
router.delete('/contact/:id', ContacController.delete);

//-----------------[ TRIPS ]-----------------
router.get('/trips/list', TripsController.get);
router.get('/trips/getById/:id', TripsController.getById);
router.post('/trips/add', TripsController.create);
router.patch('/trips/update/:id', TripsController.update);
router.delete('/trips/:id', TripsController.delete);

//-----------------[ BUSTYPES ]-----------------
router.get('/busType/list',BusTypeController.get);
router.get('/busType/getId/:id',BusTypeController.getById);
router.post('/busType/add',BusTypeController.create);
router.patch('/busType/update/:id',BusTypeController.update);
router.delete('/busType/delete/:id',BusTypeController.delete);

//-----------------[ BUS ]-----------------
router.get('/bus/list',BusController.get);
router.get('/bus/getId/:id',BusController.getById);
router.post('/bus/add',BusController.create);
router.patch('/bus/update/:id',BusController.update);
router.delete('/bus/delete/:id',BusController.delete);


module.exports = router;