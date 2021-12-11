const Mongoose = require("mongoose");

const taskSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    text: {
        type: String,
        required: true, 
    },
    status: {
        type: String,
    },
    iterationId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Iteration",
        default: null,
    },
    projectId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    storyPoint: { type: Number, default: null },
}, {versionKey: false } )

module.exports = Mongoose.model('Task', taskSchema)