const User = require('../models/user')
const bcrypt = require('bcrypt')



exports.getSignUp = async (req, res, next) => {
    return res.render('signUp');

}

// @desc add new personal
// @route POST /personals
// @access Private

exports.signUp = async (req, res, next) => {
    let user = new User(req.body);
    console.log(user)
    if(user.email){
        user.email = user.email.toLowerCase()
    }
    const success = await user.save()
    if(success)
    {
        res.redirect('/')
    }
    
    
}