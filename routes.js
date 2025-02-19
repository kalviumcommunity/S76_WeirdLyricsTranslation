// routes.js
const express = require('express');
const router = express.Router();
const { createItem, getItem, updateItem, deleteItem } = require('./Controller.js');

// CRUD Routes
router.post('/items', createItem); // Create an item
router.get('/items/:id', getItem); // Get an item by ID
router.put('/items/:id', updateItem); // Update an item by ID
router.delete('/items/:id', deleteItem); // Delete an item by ID

// Export the router to use in server.js
module.exports = router; 