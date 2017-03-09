import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
const Menu = require('./Menu.js');
const ToggleTools = require('./ToggleTools.js');
const Middle = require('./Middle.js');
const AccordionGrid = require('./AccordionGrid.js');


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
