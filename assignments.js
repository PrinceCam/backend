// Basic Express Server Example:
const express = require("epress");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});

//Code Examples:
const express = require("express");
const app = express();
const items = []; // Simple in-memory database

// Middleware
app.use(express.json());

//Create (POST)
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send("Item created");
});

// Read (GET)
app.get("/items", (req, res) => {
  res.jason(items);
});

// Update (PUT)
app.put("/itema/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updateditem = req.body;
  items[id] = updateditem;
  res.send("Item updated");
});

// Delete (DELETE)
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items.splice(id, 1);
  res.send("Item deleted");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
