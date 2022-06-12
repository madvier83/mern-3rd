const express = require("express");
const router = express.Router();
const User = require("../models/User");
const cors = require("cors");

// GET ALL USER
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ notfound: "No users found" }));
  res.set("Access-Control-Allow-Origin", "*");
});

// GET USER BY ID
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ notfound: "No user found with that ID" })
    );
    res.set("Access-Control-Allow-Origin", "*");
});

// CREATE USER
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ error: "Error creating user" }));
    res.set("Access-Control-Allow-Origin", "*");
});

// UPDATE USER
router.patch("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ notfound: "No user found with that ID" })
    );
  res.set("Access-Control-Allow-Origin", "*");
});

// DELETE USER
router.delete("/:id",(req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  User.findByIdAndDelete(req.params.id)
  .then((user) => res.json(user))
  .catch((err) => res.status(404).json({ notfound: "No user found with that ID" }));
});

module.exports = router;
