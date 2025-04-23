const express = require('express');
const multer = require("multer");
const router = express.Router();
const RoutesController = require('../controllers/Admin/routesController');
const { checkJWT, isAdmin } = require('../config/authCheck');
const { route } = require('./clientRoutes');
const ContacController = require('../controllers/Admin/contactController');
const TripsController = require('../controllers/Admin/tripsController');
const BusTypeController = require('../controllers/Admin/busTypeController');
const BusController = require('../controllers/Admin/busController');
/* const DriversController = require('../controllers/Admin/driversController'); */
const SeatsController = require('../controllers/Admin/seatsController');

const DriverController = require('../controllers/Admin/driverController');
const UserController = require('../controllers/Admin/userController');
const BlogController = require('../controllers/Admin/blogController');
const BlogCategoryController = require('../controllers/Admin/blogCategoryController');

const ReviewController = require('../controllers/Admin/reviewController');
const BookingController = require('../controllers/Admin/bookingController');
const BookingDetailController = require('../controllers/Admin/bookingDetailController');

const upload = require('../config/upload');
//------------------[ ROUTES ]------------
router.get('/routes/list',checkJWT, isAdmin ,RoutesController.get);
router.get('/routes/getId' ,checkJWT, isAdmin ,RoutesController.getById);
router.post('/routes/add' ,checkJWT, isAdmin ,RoutesController.create);
router.patch('/routes/update/:id' ,checkJWT, isAdmin ,RoutesController.update);
router.delete('/routes/delete/:id' ,checkJWT, isAdmin ,RoutesController.delete);

// router.post("/login", AuthController.login);

//------------------[ CONTACT ]-------------
router.get('/contact/list' ,checkJWT, isAdmin , ContacController.get);
router.get('/contact/getById/:id' ,checkJWT, isAdmin , ContacController.getById);
router.patch('/contact/update/:id' ,checkJWT, isAdmin , ContacController.update)
router.delete('/contact/:id' ,checkJWT, isAdmin , ContacController.delete);

//-----------------[ TRIPS ]-----------------
router.get('/trips/list',checkJWT, isAdmin , TripsController.get);
router.get('/trips/getById/:id',checkJWT, isAdmin , TripsController.getById);
router.post('/trips/add',checkJWT, isAdmin , TripsController.create);
router.patch('/trips/update/:id',checkJWT, isAdmin , TripsController.update);
router.delete('/trips/:id',checkJWT, isAdmin , TripsController.delete);

//-----------------[ BUSTYPES ]-----------------
router.get('/busType/list',checkJWT, isAdmin ,BusTypeController.get);
router.get('/busType/getId/:id',checkJWT, isAdmin ,BusTypeController.getById);
router.post('/busType/add',checkJWT, isAdmin ,BusTypeController.create);
router.patch('/busType/update/:id',checkJWT, isAdmin ,BusTypeController.update);
router.delete('/busType/delete/:id',checkJWT, isAdmin ,BusTypeController.delete);

//-----------------[ BUS ]-----------------
router.get('/bus/list',checkJWT, isAdmin ,BusController.get);
router.get('/bus/getId/:id',checkJWT, isAdmin ,BusController.getById);
router.post('/bus/add',checkJWT, isAdmin ,BusController.create);
router.patch('/bus/update/:id',checkJWT, isAdmin ,BusController.update);
router.delete('/bus/delete/:id',checkJWT, isAdmin ,BusController.delete);
router.get('/bus/getAllBusByStatusCreate',checkJWT, isAdmin , BusController.getAllBusByStatusCreate);
router.get('/bus/getAllByStatusEdit/:tripId',checkJWT, isAdmin , BusController.getAllByStatusEdit);

//-----------------[ DRIVERs ]-----------------
/* router.get('/drivers/list', DriversController.get); */

//-----------------[ SEATS ]-------------------
router.get('/seats/:busID',checkJWT, isAdmin , SeatsController.get);
router.put('/seats/:id',checkJWT, isAdmin , SeatsController.update);
//------------------[ DRIVER]-------------
router.get('/driver/list',checkJWT, isAdmin , DriverController.get);
router.get('/driver/getById/:id',checkJWT, isAdmin , DriverController.getById);
router.post('/driver/add', upload.single('image'), DriverController.create);
router.patch('/driver/update/:id',checkJWT, isAdmin , upload.single('image'), DriverController.update);
router.delete('/driver/:id',checkJWT, isAdmin , DriverController.delete);
router.get('/driver/getByStatusCreate',checkJWT, isAdmin , DriverController.getAllByStatusCreate);
router.get('/driver/getByStatusEdit/:tripId',checkJWT, isAdmin , DriverController.getAllByStatusEdit);

//------------------[ User]-------------
router.get('/user/list',checkJWT, isAdmin , UserController.get);
router.get('/user/getById/:id',checkJWT, isAdmin , UserController.getById);
router.post('/user/add',checkJWT, isAdmin , upload.single('image'), UserController.create);
router.patch('/user/update/:id',checkJWT, isAdmin , upload.single('image'), UserController.update);
router.delete('/user/:id',checkJWT, isAdmin , UserController.delete);

//------------------[ Blog ]-------------
router.get('/blog/list',checkJWT, isAdmin , BlogController.get);
router.get('/blog/getById/:id',checkJWT, isAdmin , BlogController.getById);
router.post('/blog/add',checkJWT,isAdmin, upload.single('image'), BlogController.create);
router.patch('/blog/update/:id',checkJWT, isAdmin , upload.single('image'), BlogController.update);
router.delete('/blog/:id',checkJWT, isAdmin , BlogController.delete);

//------------------[ Blog Category ]-------------
router.get('/blog-category/list', BlogCategoryController.getAll);
router.get('/blog-category/active', BlogCategoryController.getActive);
router.get('/blog-category/:id', BlogCategoryController.getById);
router.post('/blog-category/add', upload.single('image'), BlogCategoryController.create);
router.patch('/blog-category/update/:id', upload.single('image'), BlogCategoryController.update);
router.delete('/blog-category/delete/:id', BlogCategoryController.delete);

//------------------[ Review ]-------------
router.get('/review/list',checkJWT, isAdmin , ReviewController.get);
router.get('/review/getById/:id',checkJWT, isAdmin , ReviewController.getById);
router.patch('/review/update/:id',checkJWT, isAdmin , upload.single('image'), ReviewController.update);
router.delete('/review/:id',checkJWT, isAdmin , ReviewController.delete);

//------------------[ Booking ]-------------
router.get('/booking/list', BookingController.get);
router.get('/booking/getById/:id', BookingController.getById);
router.patch('/booking/update/:id', upload.single('image'), BookingController.update);
router.delete('/booking/:id', BookingController.delete);

//------------------[ Booking Detail ]-------------
router.get('/booking-detail/list', BookingDetailController.get);
router.get('/booking-detail/getById/:id', BookingDetailController.getById);
router.post('/booking-detail/create', BookingDetailController.create);
router.patch('/booking-detail/update/:id', BookingDetailController.update);
router.delete('/booking-detail/:id', BookingDetailController.delete);
router.get('/booking-detail/by-booking/:bookingId', BookingDetailController.getByBookingId);

module.exports = router;