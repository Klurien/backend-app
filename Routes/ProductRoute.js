const express = require('express');
const { createProduct, updateProduct, deleteProduct, findProduct } = require('../Controlers/ProductControllers');
const router = express.Router();
router.use(express.json());


router.use(express.urlencoded({extended:true}));

router.post("/createProduct", createProduct);
router.get("/findProduct", findProduct);
router.delete("/deleteProduct/:id", deleteProduct );
router.put("/updateProduct/:id", updateProduct);

module.exports=router;