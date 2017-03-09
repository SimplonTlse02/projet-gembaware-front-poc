import React, { Component } from 'react'
var Chart = require("react-chartjs-2").Bar

var chartData = {
	labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
	datasets: [
	{
		label: "Chiffre d'affaire",
		backgroundColor: [
		'rgba(255, 99, 132, 0.2)',
		'rgba(54, 162, 235, 0.2)',
		'rgba(255, 206, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(153, 102, 255, 0.2)',
		'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
		'rgba(255,99,132,1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(75, 192, 192, 1)',
		'rgba(153, 102, 255, 1)',
		'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1,
		data: [65, 59, 80, 81, 56, 55],
	}
	]
};

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
			    <a href="#" onClick={this.handleClick}>
			      Click me
			    </a>
			);
	}
}


module.exports = ShowChartbarInfo;