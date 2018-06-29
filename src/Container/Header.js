import { connect } from "react-redux";
import Header from "../Components/Header";
import { postTask } from "../Data/api";

const mapDispatchToProps = dispatch => {
	return {

		onSubmit: data => dispatch(postTask(data)),

	};

};

export default connect(null, mapDispatchToProps)(Header);