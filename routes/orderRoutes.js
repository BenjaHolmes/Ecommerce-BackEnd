const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get All Orders
const getOrders = (req, res) => {
    pool.query("SELECT * FROM orders", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Get an Order by ID
const getOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM orders WHERE id = $1", [id], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Add a Record of a New Order
const addOrder = (req, res) => {
    const { user_id, cart_id, price_total, complete, completed_at } = req.body;
        pool.query( "INSERT INTO orders (user_id, cart_id, price_total, complete, completed_at) VALUES ($1, $2, $3, $4, $5)"
        , [user_id, cart_id, price_total, complete, completed_at], 
            (error, results) => {
                if (error) throw error;
                res.status(201).send('Order Record Added Succesfully');
            })
};
 
//Update an Existing Products Details
const updateOrderDetails = (req, res) => {
    const id = parseInt(req.params.id);
    const { user_id, cart_id, price_total, complete, completed_at } = req.body;
     pool.query("SELECT * FROM orders WHERE id = $1" , [id],
     (error, results) => {
        if(!results.rows.length) {
            res.send("This Order Record was not found in the Database");
        }
        pool.query("UPDATE orders SET user_id = $1, cart_id = $2, price_total = $3, complete = $4, completed_at = $5 WHERE id = $6", 
        [user_id, cart_id, price_total, complete, completed_at, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("Product Details Updated Succesfully");
            })
    })
};

//Delete a Specified Product by Id
const deleteOrder = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM orders WHERE id = $1" , [id],
    (error, results) => {
        if(!results.rows.length) {
            res.send("This Order Record was not found in the Database");
        } else if (error) {
         throw error;
        }
        res.status(200).send("Order Record Deleted.")
    })
};

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', addOrder);
router.put('/:id', updateOrderDetails);
router.delete('/:id', deleteOrder);

module.exports = router;