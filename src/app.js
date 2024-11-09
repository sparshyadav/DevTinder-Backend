const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js")
const app = express();

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "vk@gmail.com",
        password: "vk123"
    });
    await user.save();

    res.send("User Added");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is Successfully Listening on Port: 3000");
});