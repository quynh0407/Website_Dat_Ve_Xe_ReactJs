const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');
const AuthController = require('../controllers/Client/authController');
const { checkJWT, isAdmin } = require('../services/authCheck');
const ContacController = require('../controllers/Client/contactController');
const ProfileController = require('../controllers/Client/profileController');
const upload = require('../config/upload');

//------------------[ AUTH ]------------------
router.post('/register',AuthController.register);
router.post("/login", AuthController.login);

router.post("/resetPassword", AuthController.resetPasswod);
router.patch('/resetPassword/reset/:token', AuthController.updatePassword)


//------------------[ CONTACT ]------------------
router.post('/contact/question', ContacController.create);

//------------------[ PROFILE ]------------------
router.get('/profile/list',ProfileController.get);
router.get('/profile/getId/:id',ProfileController.getById);
router.patch('/profile/update/:id', upload.single('image'), ProfileController.update);

module.exports = router;