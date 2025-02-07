const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json());



app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const PORT = 3000;

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  todo: {
    type: String,
    // required: true,
  },
  created: Number,
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

app.get("/test", (req, res) => {
  console.log("Test route hit");
  res.json({ msg: "success" });
});


app.get("/gettodos", (req, res) => {
  console.log("getTodos HIT");
  ToDo.find().then((found) => {
    console.log("Found", found);
    res.json(found);
  })
  .catch(err => console.log(err))
});

app.post("/create", (req, res) => {
  console.log("Create Route HIT", req.body);
  ToDo.create(req.body).then((created) => {
    console.log("created", created);
    res.json(created);
  });
});

app.delete("/delete/:id", (req, res) => {
  console.log("Delete Hit", req.params.id);
  ToDo.findByIdAndDelete(req.params.id)
    .then((deleted) => {
      console.log("deleted", deleted);
      res.json(deleted);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

app.put("/edit:id", (req, res) => {
  console.log("Edit hit", req.params, req.body);
  ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updated) => {
      console.log("upD", updated);
      res.json(updated);
    }
  );
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => console.log(err));

  console.log(`Server connnected at port : ${PORT}`);
});
