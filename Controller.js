// controllers/exampleController.js

// In-memory database (for demonstration purposes)
// let items = [];
const Lyrics= require('./schema');
// Create an item
const createItem = async (req, res) => {
  const { title, artist, lyrics, translation } = req.body; 
  const newItem = new Lyrics({ title, artist, lyrics, translation });
  await newItem.save();

 
  res.status(201).json({ message: "Item created", item: newItem}); // Return the created item with a 201 status code
};

// Get an item by ID
const getItem = async (req, res) => {
  const item = await Lyrics.find();
  if (!item) {
    return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
  }
  res.status(200).json({message: "Item found", item: item}); // Return the item with a 200 status code
};

// Update an item by ID
const updateItem = async (req, res) => {
  const item=await findById(req.params.id);
  const { title, artist, lyrics, translation } = req.body;
  if (!item) {
    return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
  }
  const updatedItem = await Lyrics.findByIdAndUpdate(req.params.id, { title, artist, lyrics, translation }, { new: true });
  res.status(200).json({message: "Item updated", item: updatedItem}); // Return the updated item with a 200 status code
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  const item=await findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
  }
  const deletedItem = await Lyrics.findByIdAndDelete(req.params.id);
  await deletedItem.deleteOne();
  res.status(200).json({ message: "Item deleted" }); // Return a success message with a 200 status code
};
// Export the functions to use in routes
module.exports = { createItem, getItem, updateItem, deleteItem };