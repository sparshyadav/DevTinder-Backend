const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sparshyadavmrt:newpassword@cluster0.ajmb4.mongodb.net/DevTinder");
        console.log("Database Connected Successfully");
    }
    catch (error) {
        console.log("Error Occurred While connecting Database", error);
    }
}

module.exports = connectDB;