import React, { Component } from 'react'
var Chart = require("react-chartjs-2").Bar

var getInvoices = require("./getInvoicesFromXml.js");
var orderInvoices = require("./orderInvoices.js");

// Récupérer toutes les factures
var all_invoices = getInvoices.getData();

// Récupérer le total de chaque mois pour chaque année
var totalByMonth_2002 = orderInvoices.OrderInvoicesByYear(all_invoices, 2002).map(function(element) {
	return element.montantTotal;
});

var totalByMonth_2003 = orderInvoices.OrderInvoicesByYear(all_invoices, 2003).map(function(element) {
	return element.montantTotal;
});


// Création du chart
var chartData = {
	labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
	datasets: [
	{
		label: "Factures 2002",
		backgroundColor: 'rgba(54, 162, 235, 0.2)',
		borderColor: 'rgba(54, 162, 235, 1)',
		borderWidth: 1,
		data: totalByMonth_2002,
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
		return(
			<Chart data={ chartData } options={ chartOptions } 
			width="600" height="250"/>
		)
	}
}

console.log(chartData);
module.exports = BarChart;