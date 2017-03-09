module.exports = {
	
	invoices: [],

	getData: function() {
		var XPath = "//val";
		var XMLvalues = document.evaluate(XPath, document, null, XPathResult.ANY_TYPE, null);
		var thisValue = XMLvalues.iterateNext();
		var tab = [];
		while (thisValue) {
			tab.push(thisValue.textContent);
			thisValue = XMLvalues.iterateNext();
		}
		this.transformToObject(tab);
		return this.invoices;
	},

	transformToObject: function(tableau) {
		var len = tableau.length;
		var j = 0;
		for (var i = 0; i < len; i = i + 4) {
			this.invoices[j] = {
				"DocumentNo": tableau[i],
				"GrandTotal": tableau[i+1],
				"Description": tableau[i+2],
				"DateInvoiced": tableau[i+3]
			}
			if (i % 4 === 0) {
				j++;
			}
		}
		return this.invoices;
	}
}