require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn')
const session = require('express-session');
const taskRoutes = require('./routes/taskRoutes')
const loginRoutes = require('./routes/loginRoutes')
const signUpRoutes = require('./routes/signUpRoutes')


const app = express()
let PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
connectDB();

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(
    session({
      secret: "ajfeirf90aeu9eroejfoefj",
      resave: false,
      saveUninitialized: false
    })
  );
  

app.use('/tasks', taskRoutes)
app.use('/', loginRoutes)
app.use('/signup', signUpRoutes)
app.post('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("here")
      res.redirect('/'); 
    }
  });
});


mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log('Server is running on port '+PORT))
})

mongoose.connection.on('error', err => {
    console.log(err)
    
})

