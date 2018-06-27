
import React from 'react'
import Form from './Forms/Form'

const Header = ({children}) => (
	<React.Fragment>
		<header>
			<h1> {children} </h1>
			<Form name="Add"/>
		</header>
	</React.Fragment>
)

export default Header