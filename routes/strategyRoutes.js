const express = require('express')
const strategyController = require('../controllers/strategyController')
const router = express.Router();

// strategy routes


router.get('/', strategyController.strategy_index)

router.post('/strategies', strategyController.strategy_create_post)

router.get('/newStrats', strategyController.strategy_create_get)

// Use a : to call a route parameter
router.get("/:id", strategyController.strategy_details)

// Use a : to call a route parameter
router.delete("/:id", strategyController.strategy_delete)


module.exports = router