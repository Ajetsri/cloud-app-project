const express = require("express");
const Task = require("./models/Task");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());//converts json to javascript for express

const PORT = process.env.PORT || 3000;

mongoose 
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error(" MongoDB Connection Error");
        console.error(err);
    });

const tasks = [];//array - each object is stored inside{}

app.get("/", (req, res) => {
    res.send("Cloud App Running Successfully 🚀");
});
app.get("/about",(req, res)=>{
    res.send("Tjs s my frst project");
});
app.get("/Task",(req, res)=>{
    res.send("<h1>trying connect dots....<h1>");
});
app.get("/user", (req, res) => {
    res.json({
        name: "Teja",
        company: "amazon",
        experience: "2 years"
    });
});//json format

app.get("/tasks", async (req, res) => {

    try {

        const tasks = await Task.find();

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});//mongoDB Get 
app.get("/tasks/:id", async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});//get one task


//using MongoDB post

app.post("/tasks", async (req, res)  => {
    if(!req.body.task){
        return res.status(400).json({
            message: "Task is required"
        });
    }

    try {

        const newTask = await Task.create({
            task: req.body.task
        });

        res.status(201).json(newTask);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
app.patch("/tasks/:id", async (req, res) => {
    if(!req.body.task){
        return res.status(400).json({
            message: "Task is required"
        });
    }

    try {

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                task: req.body.task
            },
            { returnDocument: "after" }
        );

        res.json(updatedTask);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});//update a task -MongoDB
app.delete("/tasks/:id", async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});//Delete a task - MongoDB

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

