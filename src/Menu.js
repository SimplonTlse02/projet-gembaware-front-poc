import React, { Component } from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'
const IconSetting = require('./IconSetting.js');
const FormSearch = require('./FormSearch.js'); 

class Menu extends Component{
render(){
return	(
	    <Segment >
	        <Grid columns={5} verticalAlign='middle'>
	            <Grid.Row verticalAlign='top'>
	                <Grid.Column id='customerLogo' >
	                    <Image src='/logo.jpg' size='tiny' />
	                </Grid.Column>
	                <Grid.Column>
	                    <h1>Gembaware Solution</h1>
	                </Grid.Column>
	                <Grid.Column></Grid.Column>
	                <Grid.Column><FormSearch /></Grid.Column>
	                <Grid.Column>
	                	
	                    <IconSetting />
	                </Grid.Column>
	            </Grid.Row>
	        </Grid>
	    </Segment>
    	)
	}
} 

module.exports = Menu;