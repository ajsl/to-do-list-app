
import React from 'react'
import Form from './Forms/Form'



const Header = ({children, onSubmit}) => (
	<React.Fragment>
		<header>
			<h1> { children } </h1>
			{console.log(onSubmit)}
			<Form name="Add" onSubmit={ onSubmit } label="Task" />
		</header>
	</React.Fragment>
)

export default Header