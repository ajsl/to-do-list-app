import React, {Component} from 'react'


class Form extends Component {

	constructor(props){
		super(props);
		
		this.state = {

			value: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);


	}

		handleChange(e) {
		
		this.setState({value: e.target.value});
		}



		handleSubmit(e){

			e.preventDefault();

			const data = this.state.value;


			this.props.onSubmit(data);

			this.setState(({
				value: "",
			}))

		}
	



	render() {
		const {name, className} = this.props;
		return(
		<React.Fragment>
		<form className="d.padding.5 row d.inline-block" onSubmit={this.handleSubmit} >
			<input 	
				onChange={e => this.handleChange(e)}
				className="col-md-9"
				value={this.state.value}
				/>
			<button className={className}>{name}</button> 
		</form>
		</React.Fragment>

		)
	}

}
export default Form;
 

//  	constructor(props){
// 		super(props);
		
// 		this.state = {

// 			fields: props.fields,
// 		}

// 		this.handleSubmit = this.handleSubmit.bind(this);

// 	}

// 		handleChange(e) {
// 			const fields = this.state.fields;
// 			fields.value = e.target.value;
// 			this.setState({fields: fields});
// 		}

// 		handleSubmit(e){
// 			e.preventDefault();

// 			const data = this.state.fields.reduce((data, {name, value}) => {
// 				data[name] = value
// 				return data
// 			}, {});

// 			this.props.onSubmit(data);

// 			this.setState ({
// 				fields: this.state.fields.map(field => {
// 					return {
// 						...field,
// 						value: "",
// 					};
// 				}),
// 			});
// 		}
	



// 	render() {
// 		const {name, fields} = this.props;
// 		return(
// 		<React.Fragment>
// 		<form onSubmit= {this.handleSubmit} >
// 			<input 	
// 				name={fields.name}
// 				value={fields.value}
// 				onChange= {e => this.handleChange}

// 				/>

// 			<button > {name} </button> 
// 		</form>
// 		</React.Fragment>

// 		)
// 	}

// }