import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class IconSetting extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (

			<Menu compact icon='labeled' >
				<Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick} >
					<Icon name='user' size='massive'/>
					<div id='infoUser'>
						<div>Nom</div>
						<div>Prenom</div>
						<div>Fonction</div>
					</div>
				</Menu.Item>
				<Menu.Item name='sign out' active={activeItem === 'sign out'} onClick={this.handleItemClick}>
					<Icon name='sign out' />
					Sign out
				</Menu.Item>
				<Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
					<Icon name='settings' />
					Settings
				</Menu.Item>

				<Menu.Item name='help circle outline' active={activeItem === 'help circle outline'} onClick={this.handleItemClick}>
					<Icon name='help circle outline' />
					Help
				</Menu.Item>
			</Menu>
			)
	}
}

module.exports = IconSetting;