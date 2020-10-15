const todoListModel = require('../../models/todoListModels');
const todoListController = {};

// list all tasks
todoListController.all = async (req, res) => {
  	await todoListModel.find({}, (err, todoList) => {
  		res.json(todoList);
  	});
};

// list the tasks by id
todoListController.selectForId = async (req, res) => {
	let { id } = req.params;
	await todoListModel.findOne({_id: id}).exec((err, todoList) => {
	res.json(todoList)
	});
};

// a task is created
todoListController.create = async (req, res) => {
  	const todoList = new todoListModel(req.body);
	await todoList.save();
  	res.json({ response: "La tarea se creo con exito" });
};

// Task Update
todoListController.update = async (req, res) => {
  	const { id } = req.params;
  	await todoListModel.findOneAndUpdate({_id: id}, { $set: { isComplete: req.body.isComplete} }, { new: true });
	res.json({ response: "La tarea se actualizo con exito" });
};

// removal of a task
todoListController.delete = async (req, res) => {
	let { id } = req.params;
	await todoListModel.remove({_id: id});
	res.json({ response: "La tarea se elimino con exito" });
};

module.exports = todoListController;
