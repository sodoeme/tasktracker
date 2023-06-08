const User = require('../models/user')
const bcrypt = require('bcrypt')



exports.getUserLogin = async (req, res) => {
    console.log("here")
    return res.render('login');

}

// @desc add new personal
// @route POST /personals
// @access Private

exports.login = async (req, res) => {
    // Get user from DB
    let email = req.body.email
    if(email)
    email = email.toLowerCase()
    let password = req.body.password;

    const user = await User.findOne({email: email})

    if(!user){
        res.redirect('/')
    }
    const checkPwrd = user.comparePassword(password)
    if(!checkPwrd){
        res.redirect('/')
    }

    req.session.user = user._id
    console.log(req.session.user)
    res.redirect('/tasks')

  
};