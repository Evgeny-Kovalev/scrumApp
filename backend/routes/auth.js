const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/signup', authController.postSignup)
router.post('/login', authController.postLogin)

module.exports = router