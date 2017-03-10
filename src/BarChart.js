import React, { Component } from 'react'
var Chart = require("react-chartjs-2").Bar
var ModalInvoices = require("./ModalInvoices.js")

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
	}, {
		label: "Factures 2003",
		backgroundColor: 'rgba(154, 362, 235, 0.2)',
		borderColor: 'rgba(154, 362, 235, 1)',
		borderWidth: 1,
		data: totalByMonth_2003,
	}, {
		label: "Différence à n-1",
		type:"line",
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132, 1)',
		borderWidth: 1,
		data: [150, 50, 100, 400, -300, 500, 0, 90, 80, 70, 500, 700],
	}
	]
};

var chartOptions = {
	responsive: true,
	scales: {
		xAxes: [{
			stacked: true
		}],
		yAxes: [{
			stacked: true
		}]
	}
}

function onElementsClick(elems){
    	if (elems.length !== 0) {
    		document.location.href="details.html"
    	}
}

function getElementsAtEvent(elems){
    	console.log(elems);
}
   

class BarChart extends Component{

	// handleClick(evt)
	// {
	//     var activeElement = chartData.getElementAtEvent(evt);
	//     document.getElementById('view').innerHTML = activeElement;
	//     console.log(activeElement);
	// }

	render() {
		return(
			<Chart data={ chartData } options={ chartOptions } onElementsClick={onElementsClick} getElementsAtEvent={getElementsAtEvent} width="600" height="250"/>
		)
	}
}

module.exports = BarChart;