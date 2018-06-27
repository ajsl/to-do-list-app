import React from 'react'
import Form from './Forms/Form'

const Task = () => (
	<React.Fragment>
		
		<div className="container">
		 	<div className="row">
		 		
				<form className=".col-md-3"> <input type="checkbox" /> </form>
				<h4 className=".col-md-3"> Task#1 </h4>
				<Form name="Edit"/>
				<button className=".col-md-3"> Delete </button>
			</div>
		</div>

	</React.Fragment>
)

export default Task