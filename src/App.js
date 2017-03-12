import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
const Menu = require('./Menu.js');
const ToggleTools = require('./ToggleTools.js');
const AccordionGrid = require('./AccordionGrid.js');


import './App.css';

class App extends Component {
	render() {

		return (
			<Grid stackable>
				<Container fluid>
					<div className="App">
						<Menu />
						<ToggleTools />
						<AccordionGrid />
					</div>
				</Container>
			</Grid>
		);
	}
}

export default App;
