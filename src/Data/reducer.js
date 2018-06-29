
const setTasks = (state, {tasks, id}) => {

	return {
		...state,
		tasks: tasks,
	};
};

const addTask = (state, { task }) => {

	return {
		...state, 

		tasks: state.tasks.concat(task),
			
			
	}
		
	
}

const removeTask = (state, { id }) => {

	return {
		...state, 
		tasks: state.tasks.filter( obj => obj.id !== id )
		

	}

}

const updateTask = (state, { task }) => {
	const id = task.id;
	
	return {
		...state, 
		//tasks: state.tasks.filter( obj => obj.id !== id ).concat(task)
		tasks: state.tasks.map( obj => obj.id === id ? 
			{
			...obj, task: task.task}

			: 

			 {...obj})


			

	}


}

const completedTask = (state, { task }) => {
	const id = task.id;
	
	return {
		...state, 
		//tasks: state.tasks.filter( obj => obj.id !== id ).concat(task)
		tasks: state.tasks.map( obj => obj.id === id ? 
			{
			...obj, completed: task.completed}

			: 

			 {...obj})
	}

}


const reducer = (state, action) => {
	switch (action.type) {
		case "setTasks": return setTasks(state, action);
		case "addTask": return addTask(state, action); 
		case "removeTask": return removeTask(state, action);
		case "updateTask": return updateTask(state, action);
		case "completedTask": return completedTask(state, action);
		default: return state;
	}
}

export default reducer;