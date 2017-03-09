import React, { Component } from 'react'
import Moment from 'react-moment';

class DateForm extends Component{

	render(){
	  	return (
	  		
	  		<Moment locale="de" format="DD/MM/YYYY HH:mm"></Moment>

	  	)
  	}
}
module.exports = DateForm;