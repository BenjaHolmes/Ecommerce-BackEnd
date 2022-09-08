const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get A List of all items in every cart
const getCartItems = (req, res) => {
    pool.query("SELECT * FROM cart_item", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

// Find all items in a specified cart
const getCartItemsByCartId = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM cart_item WHERE cart_id = $1", [id], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Add a Record of a New Cart Item
const addCartItem = (req, res) => {
    const { product_id, cart_id, quantity } = req.body;
        pool.query( "INSERT INTO orders (product_id, cart_id, price_total, complete, completed_at) VALUES ($1, $2, $3, $4, $5)"
        , [product_id, cart_id, quantity], 
            (error, results) => {
                if (error) throw error;
                res.status(201).send('Cart Item Added Succesfully');
            })
};
 
//Update an Existing Cart Item
const updateCartItem = (req, res) => {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;
     pool.query("SELECT * FROM cart_item WHERE id = $1" , [id],
     (error, results) => {
        if(!results.rows.length) {
            res.send("This Cart Record was not found in the Database");
        }
        pool.query("UPDATE cart_item SET quantity = $1, WHERE id = $2", 
        [quantity, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("Cart Details Updated Succesfully");
            })
    })
};

//Delete a Specified Cart item by Id
const deleteCartItem = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM cart_item WHERE id = $1" , [id],
    (error, results) => {
        if(!results.rows.length) {
            res.send("This Cart Item was not found in the Database");
        } else if (error) {
         throw error;
        }
        res.status(200).send("Cart Item Record Deleted.")
    })
};

router.get('/', getCartItems);
router.get('/:id', getCartItemsByCartId);
router.post('/', addCartItem);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

module.exports = router;