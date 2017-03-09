import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
const Menu = require('./Menu.js');
const ToggleTools = require('./ToggleTools.js');
const AccordionGrid = require('./AccordionGrid.js');
const Soap = require('./soap.js');



import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<div className="App">
						<Menu />
						<ToggleTools />
						<AccordionGrid />
						
					</div>
				</Container>
			</div>
		);
	}
}

export default App;
