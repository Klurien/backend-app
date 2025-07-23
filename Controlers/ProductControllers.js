const express =require ('express');
const mongoose =require ('mongoose');
const cors =require ('cors');

const createProduct = async (req,res)=>{
    try{
        const newProduct = await Product.create(req.body);
        const existingProduct = await Product.findOne({name});
        if(existingProduct){
            console.log("product already exists");
            res.status(500).json(existingProduct);
        }else{
            const newProduct = await Product.create({name, quantity, price, image});
            res.status(200).json(newProduct);
            console.log('product created successfully',newProduct);
        }
    }catch(err){
        res.status(500).json({error:err.message});
        console.log('Product unsuccessfully',err);
    }
    const getProduct = async (req,res)=>{
        try{
            const products = await Product.find();
            res.status(200).json(products);
            console.log('fetch products',products);
        }catch(error){
            res.status(500).json({error:err.message});
            console.log('products not retrieved',err);
        }
    }
    const findProduct = async (req,res)=>{
        try{
            const findProduct = await Product.findById(req.params.id);
            if (!product){
                console.log("product not found");
                return res.status(404).json({error:error.message});
            }else{
                res.status(200).json(findProduct);
                console.log('product found',findProduct);
            }
                
            }
            catch(err){
                res.status(500).json({error:err.message});
                console.log('product not found',err);
        }
    }
    const updateProduct = async (req,res)=>{
        try{
            const updateProduct = await Product.findByIdAndUpdate(req.params.id,req.body);
               
               
          
            if (!product){
                console.log("product not found");
                return res.status(404).json({error:error.message});
            }else{
                res.status(200).json(updateProduct);
                console.log("product updated");
            }
            
        }
    catch(err){
            res.status(500).json({error:err.message});
            console.log("product not updated",err);
        }
        }    

     const deleteProduct = async (req,res)=>{
        try{
            const deleteProduct = await Product.findByIdAndDelete(req.params.id);
            if (!product){
                console.log("product not found");
                return res.status(404).json({error:error.message});
            }else{
                res.status(200).json(deleteProduct);
                console.log("product deleted");
            }

        }
    catch(err){
            res.status(500).json({error:err.message});
            console.log("product not deleted",err);
        }
     }
                modules.export={
    createProduct, 
    getProduct,
    updateProduct,
    deleteProduct,
                }
    };
