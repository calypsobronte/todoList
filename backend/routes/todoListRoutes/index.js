const { Router } = require('express');
const router = Router();

//We load the controller
const todoList = require('../../controllers/todoListController');

//We created the GET, POST, DELETE routes
router.get('/', todoList.all);
router.get('/:id', todoList.selectForId);
router.post('/create', todoList.create);
router.post('/update/:id', todoList.update);
router.delete('/delete/:id', todoList.delete);

module.exports = router;
