
import React from 'react'
import Form from './Forms/Form'



const Header = ({children, onSubmit }) => (
	<React.Fragment>
		<header className="card text-center d-flex flex-column justify-content-center">
			<h1 className="card-title p-2"> { children } </h1>
			<Form className="btn-primary p-2" name="Add" onSubmit={ onSubmit } label="Task" />
		</header>
	</React.Fragment>
)

export default Header