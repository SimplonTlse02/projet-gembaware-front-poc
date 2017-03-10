import React, { Component } from 'react'
import Moment from 'react-moment'
import { Button, Input } from 'semantic-ui-react'


class DateForm extends Component{

	constructor(props) {
    	super(props);
    	this.state = {format: "DD/MM/YYYY HH:mm"};
  	}

	handleChange(event) {
		this.setState({format: event.target.value});
	}

	render(){
	  	return (
	  		<div>
	  			<Moment locale="fr" format={this.state.format}></Moment>
		        <div>
		        	<input onChange={this.handleChange.bind(this)} defaultValue={this.state.format} id="date-input" />
      			</div>
      		</div>
	  	)
  	}
}
module.exports = DateForm;