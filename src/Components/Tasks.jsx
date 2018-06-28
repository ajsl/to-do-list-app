import React, { Component } from 'react'
import Task from '../Container/Task'

class Tasks extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { tasks } = this.props

		return(
			<React.Fragment>

			 
				
				{ tasks.map(task => (

					<Task key={ task.id } name={ task.task } id={task.id} />

					))};
				

			
			</React.Fragment>
		);
	}
}
	


export default Tasks;