const express = require('express');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes =  require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
const flash = require("express-flash");

const LocalStrategy = require('passport-local').Strategy;
const pool = require('./db');
const bcrypt = require('bcrypt');

const passport = require('passport');
const app = express();


initialize(passport);

//Middleware
app.use(express.urlencoded({ extended: false }));
app.set('view-engine', 'ejs');

app.use (
    session ({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.json());


//EJS Views
app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

//Auth Routes

app.post(
    '/auth',
    passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true,
    })
  );

  app.get('/logout', (req, res) => {
    req.logOut(() => {
        res.redirect('/');
    });
  });

//routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/cartItem', cartItemRoutes);

//Passport Config
function initialize (passport) {
    const authenticateUser = (email, password, done) => {
        pool.query(`SELECT * FROM users WHERE email = $1`, [email],
            (error, results) => {
                if (error) {
                    throw error;
                }
                if (results.rows.length > 0) {
                    const user = results.rows[0];
                    bcrypt.compare(password, user.password, (error, isMatch) => {
                        if (error) {
                          throw error;
                        }
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {message: "Password Incorrect"});
                        }
                    })
                } else {
                    return done(null, false, {message: "This User Was Not Found"})
                }
            }
        );
    };

    passport.use(
        new LocalStrategy(
            { usernameField: "email", passwordField: "password" },
             authenticateUser)
             );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        pool.query(
            'SELECT * FROM users WHERE id = $1', [id], (error, results) => {
                if (error) {
                    return done(error);
                }
                return done(null, results.rows[0]);
            });
    });
};

//Start Server
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});