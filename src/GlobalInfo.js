import React, { Component } from 'react';
import { Icon, Segment } from 'semantic-ui-react'
class GlobalInfo extends Component{
	render() {
		return(
			<Segment id='blockInfo' textAlign='center'> 
				<h2>
					<Icon name='arrow up' color='green'> 
					</Icon>  {this.props.sum} €
				</h2>
				<h3>{this.props.text} </h3>
			</Segment>
		)
	}
}

module.exports = GlobalInfo;