const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js")
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    user.save();

    res.send("User Added Successfully");
})

app.get("/email", async (req, res) => {
    console.log(req.body);
    const user = await User.find(req.body);
    res.send(user);
})

app.get("/feed", async (req, res) => {
    const feed = await User.find();
    res.send(feed);
})

app.patch("/update", async (req, res) => {
    let name = req.body.firstName;
    console.log(name);
    const updatedUser = await User.findByIdAndUpdate(req.id, { firstName: req.body.firstName });
    res.send(updatedUser);
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is Successfully Listening on Port: 3000");
});