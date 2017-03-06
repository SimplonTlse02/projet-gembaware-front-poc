import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
const Menu = require('./Menu.js');
const ToolBar = require('./ToolBar.js');
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
    	<Container fluid>
	      <div className="App">
	        <Menu />
	        <ToolBar />
	      </div>
	      </Container>
	      </div>
    );
  }
}

export default App;
