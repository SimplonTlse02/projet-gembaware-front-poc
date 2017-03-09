import React, { Component } from 'react'
const BarChart = require('./BarChart.js')
console.log(BarChart);

class ShowChartbarInfo extends Component{
	constructor(props) {
	    super(props);
	    // this.state = {value: ''};

	    this.handleClick = this.handleClick.bind(this);
	    
	  }
	handleClick(e) {
		e.preventDefault();
	    console.log('The link was clicked.');
  	}	
	
	render(){
			return (
			    <a href="/CA" onClick={this.handleClick}>
			      Click me
			    </a>
			);
	}
}


module.exports = ShowChartbarInfo;