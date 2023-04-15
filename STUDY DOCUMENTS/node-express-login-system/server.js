// Why is initializePassport called in the beginning and not when login/register button is pressed?
// How does this syntactically make sense? looking at passport.config.js of email and id

import express from 'express'; // Framework for node.js (res.render, res.redirect)
import bcrypt from 'bcrypt'; // For hashing password
import passport from 'passport'; // For authenticating users
import flash from 'express-flash'; // For flashing messages for certain events and actions
import session from 'express-session'; // For tracking users' activities and storing their data -- purpose of tracking is for us web developers to know their issues and their interests
import methodOverride from 'method-override'; // Due to html forms having only two methods (GET and POST) -- we use method-override middlewares to let html forms have more methods // Like needing to change passwords
import dotenv from 'dotenv'; // Loads .env into Node.js process.env obj

//          function
import initializePassport from './passport-config'; // Imports the module we made

const app = express() // app is now an express object

// This block of code is for security purposes, 
// when in production environment, env variables are on the server already
if (process.env.NODE_ENV !== 'production') {
  dotenv.config() // reads .env file and makes them available for node.js
}
   
// Responsible for authentication
initializePassport(
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
) 

const users = []

app.set('view-engine', 'ejs') // Changes view-engine to ejs

// Initializes middlewares for express.js to use
/*
  flash = for pop-up messages in case of fail or success 
*/
app.use(express.urlencoded({ extended: false })) // Changes default (true) -- allows middle to handle encoded URL
app.use(flash()) 
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))                                         // adds express session middleware
app.use(passport.initialize())              // req.isAuthenticated()
app.use(passport.session())                 // builds on top of express' session middleware
app.use(methodOverride('_method'))

/*
  checkAuthenticated is for / = is the main page with sensitive users information
  it checks if the user is authenticated
  it kicks out un-authenticated users in '/' and redirects them to /login
  
  checkNotAuthenticated is for /login and /register
  it checks if the user is not authenticated
  it kicks out authenticated users out of login and register pages
*/

function checkAuthenticated(req, res, next) { // 
  if (req.isAuthenticated()) {
    return next() //                                                                execute to route handler function
  }
  res.redirect('/login') //                                                         
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

// app.get -- prepares an algorithm on when users land on {URL_ENTERED}
// app.post -- prepares an algorithm on when post on {URL_ENTERED}
// app.delete -- prepares an algorithm on when delete on {URL_ENTERED}

app.get('/', // on main page                                                        name of url
checkAuthenticated, //                                                              when that url is entered, a middleware function is called     
(req, res) => { //                                                                  when authentication is successful, function is called     
  res.render('index.ejs', { name: req.user.name }) //                               renders you to homepage
})        

app.get('/login', checkNotAuthenticated, (req, res) => { 
  res.render('login.ejs')
})

//                                        this function's parameter is authentication strategy, local
// executes when user submits form in /login
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})


// executes when user submits form in /register
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

app.listen(3000)