import React from 'react'
import Form from './Forms/Form'

const Task = ({name, onDelete, onEdit, onCheck }) => (

	<React.Fragment>
		
		<div className="container">
		 	<div className="row">
		 		
				<form className=".col-md-3"> <input type="checkbox" onChange={onCheck} /> </form>
				<h4 className=".col-md-3"> {name} </h4>
				<Form name="Edit" onSubmit={ onEdit } label="Task" />
				<button onClick={ onDelete } className=".col-md-3"> Delete </button>
			</div>
		</div>

	</React.Fragment>
)

export default Task