const express = require('express')
const router = express.Router()
const signUpController = require('../controllers/signUpController')

router.route('/')
    .get(signUpController.getSignUp)
    .post(signUpController.signUp)

    
module.exports = router