import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
class GlobalInfo extends Component{
	render() {
		return(
			<div>
				<h3>{this.props.text} </h3>
				<h3><Icon name='arrow up' color='green'> </Icon>  {this.props.sum} € </h3>
			</div>
		)
	}
}

module.exports = GlobalInfo;