const express = require("express");
const connectDB = require("./config/database.js");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello from the Server");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is Successfully Listening on Port: 3000");
});