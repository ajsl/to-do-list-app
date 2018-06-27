
const setTasks = (state, { tasks }) => {
	return {
		...state,
		tasks: tasks,
	};
};


const reducer = (state, action) =>{
	switch (action.type) {
		case "setTasks": return setTasks(state, action);
		default: return state;
	}
}

export default reducer;