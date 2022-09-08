const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get All Carts in Database
const getCarts = (req, res) => {
    pool.query("SELECT * FROM cart", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Get a Cart by ID
const getCartById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM cart WHERE id = $1", [id], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Add a Record of a New Cart
const addCart = (req, res) => {
    const { user_id } = req.body;
        pool.query( "INSERT INTO cart (user_id, completed_at) VALUES ($1, NOW()::timestamp)"
        , [user_id], 
            (error, results) => {
                if (error) throw error;
                res.status(201).send('A New Cart Record Added Succesfully');
            })
};
 
/* 
   No Need to update cart as it only contains user id
   and timestamp of creation date which wont change, only necessary
   to create a new one or delete an existing
*/

//Delete a Specified Cart by Id
const deleteCart = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM cart WHERE id = $1" , [id],
    (error, results) => {
        if(!results.rows.length) {
            res.send("This Cart Record was not found in the Database");
        } else if (error) {
         throw error;
        }
        res.status(200).send("Cart Record Deleted.")
    })
};

router.get('/', getCarts);
router.get('/:id', getCartById);
router.post('/', addCart);
router.delete('/:id', deleteCart);

module.exports = router;