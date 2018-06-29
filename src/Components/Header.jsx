
import React from 'react'
import Form from './Forms/Form'



const Header = ({children, onSubmit }) => (
	<React.Fragment>
		<header className="card text-center">
			<h1 className="card-title"> { children } </h1>
			<Form className="btn-primary " name="Add" onSubmit={ onSubmit } label="Task" />
		</header>
	</React.Fragment>
)

export default Header