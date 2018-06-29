import { connect } from "react-redux";
import Task from "../Components/Task";
import { deleteTask, putTask, patchTask} from "../Data/api";


// const mapStateToProps = (state, { id }) => {
//     return {
//         // this is why storing articles in an object is useful
//         task: state.tasks.filter( obj => obj.id === id ) 
//     };
// };


const mapDispatchToProps = (dispatch, { task, checked }) => {
	const check = task.completed
	const id = task.id

	return {

		onDelete: () => dispatch(deleteTask(id)), 
		onEdit: data => dispatch(putTask(id, data)),
		onCheck: () => dispatch(patchTask(id, checked))
	};
};

export default connect(null, mapDispatchToProps)(Task);