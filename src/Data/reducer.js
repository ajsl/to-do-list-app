
const setTasks = (state, {tasks, id}) => {

	return {
		...state,
		tasks: tasks,
	};
};

const addTask = (state, { task }) => {

	return {
		...state, 
			...state.tasks.concat(task),
			
			
	}
		
	
}

const removeTask = (state, { id }) => {
	let { ...updated } = state.tasks;
	delete updated[id];
	return {
		...state, 
		...state.tasks.concat(updated),
	}
}


const reducer = (state, action) => {
	switch (action.type) {
		case "setTasks": return setTasks(state, action);
		case "addTask": return addTask(state, action); 
		case "removeTask": return removeTask(state, action);
		default: return state;
	}
}

export default reducer;