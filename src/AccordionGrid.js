import React, { Component } from 'react'
import { Grid, Segment, Row } from 'semantic-ui-react'
const AccordionFluid = require('./AccordionFluid.js');
const FormSearch = require('./FormSearch.js');
const ViewValue = require('./ViewValue.js');
const BarChart = require('./BarChart.js');
const ShowChartbarInfo = require('./ShowChartbarInfo.js');
const Dateform = require('./Dateform.js');
const GlobalInfo = require('./GlobalInfo.js');

const PhoneInput = require('./PhoneInput.js');


class AccordionGrid extends Component{ 

	render() { 
		return(
			<Grid columns='equal'>
				
					    <Grid.Column width={2}>
					        <Segment>
						      	<AccordionFluid />
						    </Segment>
					    </Grid.Column>
					<Grid.Column>
					<Grid.Row  columns={4}>
						<Grid.Column width={4} >
						      	<Segment textAlign='center'>
						      		<GlobalInfo 
						      		text="Montant total des factures 2002" 
						      		sum="5000" />
						      	</Segment>
						</Grid.Column>
						<Grid.Column width={4} >
						      	<Segment textAlign='center'>
						      		<GlobalInfo 
						      		text="Montant total des factures 2003" 
						      		sum="8000" />
						      	</Segment>
						</Grid.Column>
						<Grid.Column width={4} >
						      	<Segment textAlign='center'>
						      		<GlobalInfo
						      		text="Différence N-1" 
						      		sum="3000"/>
						      	</Segment>
						</Grid.Column>
						 </Grid.Row>
		
					    

					<Grid.Row centered columns={1}>
						<Grid.Column id='barchart' width={12}>
							<Segment textAlign='center'>
								<h2>Factures</h2>
								<BarChart />
							</Segment>
							<Segment>
								<Dateform />
							</Segment>
							<Segment>
								<PhoneInput />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid.Column>
				</Grid>
			
		)
	}
}
module.exports = AccordionGrid;
