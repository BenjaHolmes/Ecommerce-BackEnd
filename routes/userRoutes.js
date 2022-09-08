const { Router } = require('express');
const pool = require('../db');
const router = Router();
const bcrypt = require('bcrypt');

// Get All Users
const getUsers = (req, res) => {
    console.log('Getting User Info');
    pool.query("SELECT * FROM users", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Get User by ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM users WHERE id = $1", [id], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Get User by Email
const getUserByEmail = (req, res) => {
    const email = parseInt(req.params.email);
    pool.query("SELECT * FROM users WHERE email = $1", [email], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Add a User Account
const addUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    //Check if Email already exists
    pool.query( "SELECT u FROM users u WHERE u.email = $1", [email],
     (error, results) => {
        if (results.rows.length) {
            res.send("An Account with this Email already exists");
        }
        pool.query( "INSERT INTO users (first_name, last_name, email, password, created_at) VALUES ($1, $2, $3, $4, NOW()::timestamp)"
        , [first_name, last_name, email, hashedPassword], 
            (error, results) => {
                if (error) throw error;
                // res.status(201).send('User Account Added Succesfully');
                res.redirect('/')
            })
    })
};

//Update an Existing Users Details
const updateUserDetails = async (req, res) => {
    const id = parseInt(req.params.id);
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
     pool.query("SELECT * FROM users WHERE id = $1" , [id],
     (error, results) => {
        if(!results.rows.length) {
            res.send("This User was not found in the Database")
        }
        pool.query("UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5", [first_name, last_name, email, hashedPassword, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("User Details Updated Succesfully")
            })
    })
};

//Delete a User Account by Id
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM users WHERE id = $1" , [id],
    (error, results) => {
        if(!results.rows.length) {
            res.send("This User was not found in the Database")
        } else if (error) {
         throw error;
        }
        res.status(200).send("User Account Deleted.")
    })
};

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:email', getUserByEmail);
router.post('/', addUser);
router.put('/:id', updateUserDetails);
router.delete('/:id', deleteUser);

module.exports = router;