const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');
const AuthController = require('../controllers/Client/authController');
const ContacController = require('../controllers/Client/contactController');
const ProfileController = require('../controllers/Client/profileController');
const BookingController = require('../controllers/Client/bookingController');
const BookingDetailController = require('../controllers/Client/bookingDetailController');
const BookingTicketsController = require('../controllers/Client/bookingTicketsController');
const BlogCategoryController = require('../controllers/Client/blogCategoryController');
const BlogController = require('../controllers/Client/blogController');

const upload = require('../config/upload');
const { checkJWT, isAdmin } = require('../config/authCheck');


const BusController = require('../controllers/Client/busController');
const multer = require("multer");
//------------------[ HOME ]------------------
// router.post('/bus/search', busController.filterBuses);
router.post('/bus/search', BusController.filterBuses);
//------------------[ AUTH ]------------------
router.post('/register',AuthController.register);
router.post("/login", AuthController.login);

router.post("/resetPassword", AuthController.resetPasswod);
router.patch('/resetPassword/reset/:token', AuthController.updatePassword)


//------------------[ CONTACT ]------------------
router.post('/contact/question', ContacController.create);

//------------------[ PROFILE ]------------------
router.get('/profile/list',ProfileController.get);
router.get('/profile/getId/:id',checkJWT,ProfileController.getById);
router.patch('/profile/update/:id',checkJWT, upload.single('image'), ProfileController.update);

//------------------[ BOOKING ]------------------
router.get('/booking/list',BookingController.get);
router.get('/booking/getId/:id',BookingController.getById);
router.delete('/booking/delete/:id',BookingController.delete);


//------------------[ BOOKINGTICKET]-----------------
router.post('/booking/add',BookingTicketsController.create);

//------------------[ BOOKINGDETAIL ]------------------
router.get('/booking-detail/list',BookingDetailController.get);
router.get('/booking-detail/getId/:id',BookingDetailController.getById);

//------------------[ Blog ]-------------
router.get('/blog/list', BlogController.get);
router.get('/blog/getById/:id', BlogController.getById);
router.get('/blog/latest', BlogController.getLatest);
//------------------[ Blog Category ]-------------
router.get('/blog-category/list', BlogCategoryController.getAll);
router.get('/blog-category/:id', BlogCategoryController.getById);


module.exports = router;