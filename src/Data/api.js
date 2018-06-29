import axios from "../axios";
import { setTasks, addTask, removeTask, updateTask, completedTask  } from "./state";
//import history from "../history";

export const getTasks = () => dispatch => {
	axios.get("/tasks").then(({ data }) => {
		const tasks = data;

		dispatch(setTasks(tasks));
	});
};

export const postTask = formData => dispatch => {
	axios.post("/tasks", {
		task: formData 
	}).then(({ data }) => {
		const task = data;
		console.log(task)
		dispatch(addTask(task));
	})
}

export const deleteTask = (id) => dispatch => {
	axios.delete(`/tasks/${id}` ).then(() => {
		dispatch(removeTask(id));

	});
};

export const putTask = (id, formData) => dispatch => {
	axios.put(`/tasks/${id}`, {
		task: formData
	}).then(({ data }) => {
		const task = data;
		dispatch(updateTask(task));
	});
};

export const patchTask = (id, formData) => dispatch => {
	// let check = formData ? true : false;
	console.log(formData)
	axios.patch(`/tasks/${id}/complete` , {
		completed: formData
	}).then(({ data }) => {
		const task = data;
		console.log(task)
		dispatch(completedTask(task));
	});
};
