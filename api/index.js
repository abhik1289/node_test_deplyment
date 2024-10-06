const express = require("express");
const mongoose = require("mongoose");
const user = require("../models/userModel");
const app = express();

mongoose.connect("mongodb+srv://note_app:IhdFZ86Glm50KLO4@cluster0.dovrp.mongodb.net/Note").then(() => {
    console.log("Connected to Mongo")
}).catch((err) => {
    console.log(err)
});



app.use(express.json())
app.use(express.urlencoded({ extends: false }));

app.get("/", (req, res) => {
    res.send("Welcome")
    console.log("first")
})

app.post("/create", async (req, res) => {
    const { name, email, password } = req.body;
    const data = await user.create({ name, email, password });
    res.json({ data })
})

// console.log("first")




app.listen(5000, () => {
    console.log("Server run successfully")
});

module.exports = app;