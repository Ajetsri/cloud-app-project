const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default:false
    }

});

module.exports = mongoose.model("Task", taskSchema); //exporting task