const express = require("express");
const router = express.Router();

const adminMiddleware = require('./middlewares/admin');
const jwtMiddleware = require('./middlewares/jwt');

const securityController = require('./controller/security.controller');
const foodController = require('./controller/food.controller');

router.use(express.json())

router.get('/jwt', securityController.getToken);
router.get('/foods', jwtMiddleware, adminMiddleware, foodController.getFoodList);

module.exports = router;