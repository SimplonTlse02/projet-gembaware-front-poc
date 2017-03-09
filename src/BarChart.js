import React, { Component } from 'react'
var Chart = require("react-chartjs-2").Bar

var chartData = {
	labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
	datasets: [
	{
		label: "Dataset",
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
var chartOptions = {
	scales: {
		xAxes: [{
			stacked: true
		}],
		yAxes: [{
			stacked: true
		}]
	}
}
class BarChart extends Component{
	render() {
		return <Chart data={ chartData } options={ chartOptions } width="600" height="250"/>
	}
}

// var BarChart = React.createClass({
// 	render:function(){
// 		return <Chart data={chartData} options={chartOptions} width="600" height="250" />
// 	}
// });


module.exports = BarChart;