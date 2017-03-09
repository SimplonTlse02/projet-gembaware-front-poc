module.exports = {
	
	OrderInvoicesByYear: function(invoices, year) {

		var invoices_year = []
		for (var i = 1; i <= 12; i++) {
			var start_designation = (i < 10) ? year + "-0" : year + "-";
			invoices_year.push({
				designation:start_designation + i,
				montantTotal: 0
			});
		}

		var invoicesByMonth = invoices_year.map(function(element)  {
			var len = invoices.length;
			for (var i = 0; i < len; i++) {
				var month = invoices[i].DateInvoiced.substr(0,7);
				if (month === element.designation) {
					var montant_invoice = parseFloat(invoices[i].GrandTotal);
					element.montantTotal = element.montantTotal + montant_invoice;
				}
			}
			return element;
		});

		return invoicesByMonth;
	}
}

