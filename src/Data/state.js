
export const setTasks = (tasks) => {
	return {
		type: "setTasks",
		tasks: tasks,
	};
};

export const addTask = (task) => {
	return {
		type: "addTask",
		task: task,
	};
};

export const removeTask = (id) => {
	return {
		type: "removeTask",
		id: id,
	}
}

export const updateTask = (task) => {
	return {
		type: "updateTask",
		task: task,
	}
}

export const completedTask = (task) => {
	return {
		type: "completedTask",
		task: task,
	}
}