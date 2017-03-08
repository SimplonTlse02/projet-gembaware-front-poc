import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
const AccordionFluid = require('./AccordionFluid.js');
const FormSearch = require('./FormSearch.js');

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
			    
			  </Grid>
		)
	}
}
module.exports = AccordionGrid;
