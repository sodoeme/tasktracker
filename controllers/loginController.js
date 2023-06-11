const User = require('../models/user')
const bcrypt = require('bcrypt')



exports.getUserLogin = async (req, res) => {
    return res.render('login');

}

// @desc add new personal
// @route POST /personals
// @access Private

exports.login = async (req, res) => {
    // Get user from DB
    let email = req.body.email
    if (email)
        email = email.toLowerCase()
    let password = req.body.password;

    const user = await User.findOne({ email: email })

    if (!user) {
        res.send('<script>alert("Invalid credentials")</script>' + 
        '<script>window.location.href = "/"</script>')
    
        return
    }
    const checkPwrd =  await user.comparePassword(password)
    if (!checkPwrd) {
        res.send('<script>alert("Invalid credentials")</script>' + 
        '<script>window.location.href = "/"</script>')
        return
    }

    console.log(checkPwrd)
    req.session.user = user._id
    req.session.name= user.fname +' '+user.lname
    console.log(req.session.user)
    res.redirect('/tasks')


};

