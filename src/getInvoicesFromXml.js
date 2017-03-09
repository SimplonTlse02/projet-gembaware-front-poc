module.exports = {
	
	invoices: [],
	
	getData: function() {
		let dataXml = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ns1:queryDataResponse xmlns:ns1="http://idempiere.org/ADInterface/1_0"><WindowTabData xmlns="http://idempiere.org/ADInterface/1_0" NumRows="8" TotalRows="8" StartRow="0"><DataSet><DataRow><field column="DocumentNo"><val>10000002</val></field><field column="GrandTotal"><val>2731.5</val></field><field column="Description"><val xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></val></field><field column="DateInvoiced"><val>2003-01-22 18:08:37</val></field></DataRow><DataRow><field column="DocumentNo"><val>200000</val></field><field column="GrandTotal"><val>50.35</val></field><field column="Description"><val>(1) </val></field><field column="DateInvoiced"><val>2002-02-22 00:00:00</val></field></DataRow><DataRow><field column="DocumentNo"><val>10000003</val></field><field column="GrandTotal"><val>3657.5</val></field><field column="Description"><val xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></val></field><field column="DateInvoiced"><val>2003-01-22 18:09:11</val></field></DataRow><DataRow><field column="DocumentNo"><val>200001</val></field><field column="GrandTotal"><val>100.7</val></field><field column="Description"><val>(2)</val></field><field column="DateInvoiced"><val>2002-02-22 00:00:00</val></field></DataRow><DataRow><field column="DocumentNo"><val>10000000</val></field><field column="GrandTotal"><val>200</val></field><field column="Description"><val xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></val></field><field column="DateInvoiced"><val>2002-02-22 00:00:00</val></field></DataRow><DataRow><field column="DocumentNo"><val>100000</val></field><field column="GrandTotal"><val>228.85</val></field><field column="Description"><val>Export Order</val></field><field column="DateInvoiced"><val>2003-11-01 00:00:00</val></field></DataRow><DataRow><field column="DocumentNo"><val>200002</val></field><field column="GrandTotal"><val>161.12</val></field><field column="Description"><val>Text is printed in the language of the business partner (if not entered in English like this). This is also a text, which will be printed in block format on two lines on the documents.</val></field><field column="DateInvoiced"><val>2002-08-01 00:00:00</val></field></DataRow><DataRow><field column="DocumentNo"><val>10000001</val></field><field column="GrandTotal"><val>360</val></field><field column="Description"><val xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="true"></val></field><field column="DateInvoiced"><val>2002-09-07 00:00:00</val></field></DataRow></DataSet><RowCount>8</RowCount><Success>true</Success></WindowTabData></ns1:queryDataResponse></soap:Body></soap:Envelope>';
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(dataXml,"text/xml");
		var allVal = xmlDoc.getElementsByTagName("val");
		
		var tab = [];
		for (var i = 0; i < allVal.length; i++) {
			
			tab.push(allVal[i].textContent);

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
	console.log(this.invoices);
		return this.invoices;
	}
}