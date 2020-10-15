const BASE_URL = process.env.VUE_APP_BASE_API;
import axios from 'axios';

const getTodoListApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/todolist`, {});
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

const createTodoListApi = async (item) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/todolist/create`, item);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

const updateTodoListApi = async (item) => {
  const id = item._id;
  try {
    const response = await axios.post(`${BASE_URL}/api/todolist/update/${id}`, item);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

const deleteTodoListApi = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/todolist/delete/${id}`);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

export {
	getTodoListApi,
	createTodoListApi,
	updateTodoListApi,
	deleteTodoListApi
}
