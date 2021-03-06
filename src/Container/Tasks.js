import { connect } from "react-redux";
import Tasks from "../Components/Tasks";
import { getTasks } from "../Data/api";

const mapStateToProps = state => {
	return {
		

		tasks: state.tasks,

	};
	
};



const mapDispatchToProps = dispatch => {

	return {

		onLoad: () => dispatch(getTasks()), 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);