const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get All Products
const getProducts = (req, res) => {
    pool.query("SELECT * FROM products", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Get Product by ID
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM products WHERE id = $1", [id], 
    (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//Add a Record of a New Product
const addProduct = (req, res) => {
    const { name, price, category, stock } = req.body;
        pool.query( "INSERT INTO products (name, price, category, stock) VALUES ($1, $2, $3, $4)"
        , [name, price, category, stock], 
            (error, results) => {
                if (error) throw error;
                res.status(201).send('Product Added Succesfully');
            })
};
 
//Update an Existing Products Details
const updateProductDetails = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price, category, stock } = req.body;
     pool.query("SELECT * FROM products WHERE id = $1" , [id],
     (error, results) => {
        if(!results.rows.length) {
            res.send("This Product was not found in the Database");
        }
        pool.query("UPDATE products SET name = $1, price = $2, category = $3, stock = $4 WHERE id = $5", [name, price, category, stock, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("Product Details Updated Succesfully");
            })
    })
};

//Delete a Specified Product by Id
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("DELETE FROM products WHERE id = $1" , [id],
    (error, results) => {
        if(!results.rows.length) {
            res.send("This Product was not found in the Database");
        } else if (error) {
         throw error;
        }
        res.status(200).send("Product Record Deleted.")
    })
};

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProductDetails);
router.delete('/:id', deleteProduct);

module.exports = router;