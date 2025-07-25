const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("../Models/ProductModel");

// 🟢 CREATE Product
const createProduct = async (req, res) => {
  try {
    const existingProduct = await Product.findOne({ name: req.body.name });
    if (existingProduct) {
      console.log("Product already exists");
      return res.status(400).json({ error: "Product already exists", product: existingProduct });
    }

    const newProduct = await Product.create(req.body);
    console.log("Product created successfully", newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    console.log("Product creation failed", err);
    res.status(500).json({ error: err.message });
  }
};

// 🟢 GET All Products
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Products fetched", products);
    res.status(200).json(products);
  } catch (err) {
    console.log("Failed to fetch products", err);
    res.status(500).json({ error: err.message });
  }
};

// 🟢 GET Single Product by ID
const findProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product found", product);
    res.status(200).json(product);
  } catch (err) {
    console.log("Error finding product", err);
    res.status(500).json({ error: err.message });
  }
};

// 🟢 UPDATE Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product updated", product);
    res.status(200).json(product);
  } catch (err) {
    console.log("Product update failed", err);
    res.status(500).json({ error: err.message });
  }
};

// 🟢 DELETE Product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product deleted", product);
    res.status(200).json({ message: "Deleted successfully", product });
  } catch (err) {
    console.log("Product delete failed", err);
    res.status(500).json({ error: err.message });
  }
};

// Export all functions
module.exports = {
  createProduct,
  getProduct,
  findProduct,
  updateProduct,
  deleteProduct,
};
