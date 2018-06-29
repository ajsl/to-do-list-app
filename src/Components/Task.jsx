import React from 'react'
import Form from './Forms/Form'


//need to convert to a class component with a bollean in state, and checked attribute and an on change handler. 
const Task = ({onDelete, onEdit, onCheck, task }) => (



	<React.Fragment>
		
		<div className="container">
		 	<div className="row border border-dark m-3">
		 		
				<form className="col-md-1"> <input type="checkbox" onChange={onCheck} checked={task.completed} /> </form>
				<h4 className="col-md-4 "> {task.task} </h4>
				<Form className="btn-warning" name="Edit" onSubmit={ onEdit } label="Task" />
				<button  onClick={ onDelete } className="col-md-2 btn-danger "> Delete </button>
			</div>
		</div>

	</React.Fragment>
)

export default Task