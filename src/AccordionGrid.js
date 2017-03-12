import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
// const AccordionFluid = require('./AccordionFluid.js');
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
                  <Sidebar 
                         as={Menu} 
                         animation='push' 
                         width='thin' 
                         height='auto' 
                         visible={visible} 
                         icon='labeled' 
                         vertical >
                      <Menu.Item name='star'>
                        <Icon name='star' />
                        Favoris
                      </Menu.Item>
                      <Menu.Item name='configure'>
                        <Icon name='configure' />
                        System Config
                      </Menu.Item>
                      <Menu.Item name='travel'>
                        <Icon name='travel' />
                        Business
                      </Menu.Item>
                      <Menu.Item name='cube'>
                        <Icon name='cube' />
                        Product
                      </Menu.Item>
                      <Menu.Item name='euro'>
                        <Icon name='euro' />
                        Sales O.
                      </Menu.Item>
                  </Sidebar>
                <Sidebar.Pusher>
                    <Segment id='segmentData' basic>
                        <Grid textAlign='center' stackable>
                          <Grid.Column id='info' width={5}> 
                              <Segment> 
                                  <GlobalInfo 
                                    text="Montant total des factures 2002" 
                                    sum="4000" />
                              </Segment>
                          </Grid.Column>
                          <Grid.Column id='info' width={5}>
                              <Segment>  
                                <GlobalInfo 
                                    text="Montant total des factures 2003" 
                                    sum="8000" />
                              </Segment>    
                          </Grid.Column>
                          <Grid.Column id='info' width={5}>
                              <Segment>
                                <GlobalInfo 
                                    text="Différence N-1" 
                                    sum="3000" />
                              </Segment>      
                          </Grid.Column>
                            <Grid.Row>
                              <Grid.Column width={14}>
                                
                                <Segment><h3>FACTURES CLIENTS</h3>
                                  <BarChart  />
                                </Segment>
                                <Segment textAlign="left"><Dateform /></Segment>
                                <Segment textAlign="left"><PhoneInput /></Segment>
                              </Grid.Column>    
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
