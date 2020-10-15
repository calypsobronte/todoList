const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database creation
const TodoListSchema = Schema({
    nameTask: {type: String, required: true},
    isComplete: { type: Boolean, default: false }
});

module.exports = mongoose.model('TodoList', TodoListSchema);
