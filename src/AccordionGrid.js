import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
const AccordionFluid = require('./AccordionFluid.js');
const FormSearch = require('./FormSearch.js');
const ViewValue = require('./ViewValue.js');
const BarChart = require('./BarChart.js');
class AccordionGrid extends Component{  
	render() { 
		return(
			  <Grid columns='equal'>
			    <Grid.Column width={2}>
			      <Segment>
			      	<AccordionFluid />
			      </Segment>
			    </Grid.Column>
			    <Grid.Column width={4} >
			      <Segment>
			      	<FormSearch />
			      </Segment>
			    </Grid.Column>
			    <Grid.Column width={4} >
			      <Segment>
			      	<ViewValue />
			      </Segment>
			    </Grid.Column>
			    <Segment>
			      	<BarChart />
			      </Segment>
			    
			  </Grid>
		)
	}
}
module.exports = AccordionGrid;
