import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class ToolBar extends Component {
  state = { activeItem: 'calendar' }
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
   
    return (
      <div>
            <Menu icon>
                  <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                        <Icon name='calendar' />
                  </Menu.Item>

                  <Menu.Item name='privacy' active={activeItem === 'privacy'} onClick={this.handleItemClick}>
                        <Icon name='privacy' />
                  </Menu.Item>

                  <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                        <Icon name='dashboard' />
                  </Menu.Item>
                  <Menu.Item name='download' active={activeItem === 'download'} onClick={this.handleItemClick}>
                        <Icon name='download' />
                  </Menu.Item>
                  <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick}>
                        <Icon name='edit' />
                  </Menu.Item>
                  <Menu.Item name='archive' active={activeItem === 'archive'} onClick={this.handleItemClick}>
                        <Icon name='archive' />
                  </Menu.Item>
                  <Menu.Item name='erase' active={activeItem === 'erase'} onClick={this.handleItemClick}>
                        <Icon name='erase' />
                  </Menu.Item>
                  <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                        <Icon name='calendar' />
                  </Menu.Item>

                  <Menu.Item name='privacy' active={activeItem === 'privacy'} onClick={this.handleItemClick}>
                        <Icon name='privacy' />
                  </Menu.Item>

                  <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                        <Icon name='dashboard' />
                  </Menu.Item>
                  <Menu.Item name='download' active={activeItem === 'download'} onClick={this.handleItemClick}>
                        <Icon name='download' />
                  </Menu.Item>
                  <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick}>
                        <Icon name='edit' />
                  </Menu.Item>
                  <Menu.Item name='archive' active={activeItem === 'archive'} onClick={this.handleItemClick}>
                        <Icon name='archive' />
                  </Menu.Item>
                  <Menu.Item name='erase' active={activeItem === 'erase'} onClick={this.handleItemClick}>
                        <Icon name='erase' />
                  </Menu.Item>
                  <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                        <Icon name='calendar' />
                  </Menu.Item>

                  <Menu.Item name='privacy' active={activeItem === 'privacy'} onClick={this.handleItemClick}>
                        <Icon name='privacy' />
                  </Menu.Item>

                  <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                        <Icon name='dashboard' />
                  </Menu.Item>
                  <Menu.Item name='download' active={activeItem === 'download'} onClick={this.handleItemClick}>
                        <Icon name='download' />
                  </Menu.Item>
                  <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick}>
                        <Icon name='edit' />
                  </Menu.Item>
                  <Menu.Item name='archive' active={activeItem === 'archive'} onClick={this.handleItemClick}>
                        <Icon name='archive' />
                  </Menu.Item>
                  <Menu.Item name='erase' active={activeItem === 'erase'} onClick={this.handleItemClick}>
                        <Icon name='erase' />
                  </Menu.Item>
                  <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                        <Icon name='calendar' />
                  </Menu.Item>

                  <Menu.Item name='privacy' active={activeItem === 'privacy'} onClick={this.handleItemClick}>
                        <Icon name='privacy' />
                  </Menu.Item>

                  <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                        <Icon name='dashboard' />
                  </Menu.Item>
                  <Menu.Item name='download' active={activeItem === 'download'} onClick={this.handleItemClick}>
                        <Icon name='download' />
                  </Menu.Item>
                  <Menu.Item name='edit' active={activeItem === 'edit'} onClick={this.handleItemClick}>
                        <Icon name='edit' />
                  </Menu.Item>
                  
            </Menu>
      </div>
      )
}
}
module.exports = ToolBar;