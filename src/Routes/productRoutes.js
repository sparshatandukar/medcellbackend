const express= require('express');
const createProduct = require('../Controllers/productControllers');
const router= express.Router();

//route to createUser

router.post('/createProduct',createProduct);

module.exports = router;


