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

app.get("/tasks", (req, res) => {
    res.json(tasks);
});
app.get("/tasks/:id", (req, res) => {

    const taskId = parseInt(req.params.id);

    const task = tasks.find(
        task => task.id === taskId
    );

    res.json(task);

});

//using MongoDB 

app.post("/tasks", async (req, res) => {

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


/*
// below is for taking array data directly 
//navigates to particular task based on id -1,2,..-/tasks/1
app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        task: req.body.task
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });

});//Post Request
app.delete("/tasks/:id", (req, res) => {

    const taskId = parseInt(req.params.id);

    const index = tasks.findIndex(
        task => task.id === taskId
    );

    if(index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.json({
        message: "Task deleted successfully"
    });

});//Delete Request

app.patch("/tasks/:id", (req, res) => {

    const taskId = parseInt(req.params.id);

    const task = tasks.find(
        task => task.id === taskId
    );

    if(!task){
        return res.status(404).json({
            message:"Task not found"
        });
    }

    task.task = req.body.task;

    res.json(task);

});
*/
//patch
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

