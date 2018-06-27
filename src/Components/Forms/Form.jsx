import React, {Component} from 'react'


class Form extends Component {

	constructor(props){
		super(props);
		// this.state = {
		// 	fields: props.fields.slice()
		}

	render() {
		const {name} = this.props
		return(
		<React.Fragment>
			<input label={"New task"}/>
			<button> {name} </button> 
		</React.Fragment>

		)
	}

}
export default Form
 