import React, { Component } from 'react'
import Task from './Task'

class Tasks extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {

		return(
			<React.Fragment>
				<Task />
			</React.Fragment>
		);
	}
}
	


export default Tasks