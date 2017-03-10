import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
const AccordionFluid = require('./AccordionFluid.js');
const FormSearch = require('./FormSearch.js');
const ViewValue = require('./ViewValue.js');
const BarChart = require('./BarChart.js');
const ShowChartbarInfo = require('./ShowChartbarInfo.js');
const Dateform = require('./Dateform.js');
const GlobalInfo = require('./GlobalInfo.js');

const PhoneInput = require('./PhoneInput.js');


class AccordionGrid extends Component{
state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })  
	render() {
	const { visible } = this.state 
		return(
			
  	<Grid stackable>
  				<div>
        <Button onClick={this.toggleVisibility}>More Options</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' height='auto' visible={visible} icon='labeled' vertical >
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment id='segmentData' basic>
            <Grid stackable>
              <Grid.Column id='info' width={5}> 
          
            <GlobalInfo 
        text="Montant total des factures 2002" 
        sum="4000" />
          
      </Grid.Column>
      <Grid.Column id='info' width={5}>
          
            <GlobalInfo 
        text="Montant total des factures 2003" 
        sum="8000" />
          
      </Grid.Column>
      <Grid.Column id='info' width={5}>
          
          <GlobalInfo 
        text="Différence N-1" 
        sum="3000" />
          
    </Grid.Column>
     <Grid.Row>
          <BarChart  />
        </Grid.Row>
    	</Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    
    	

    
    
		
	
		
  	</Grid>

			
		)
	}
}
module.exports = AccordionGrid;
