import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
const ToolBar = require('./ToolBar.js');
class ToggleTools extends Component {
  state = { visible: false }
state = { activeItem: 'calendar' }
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state
    return (
      <div textAlign='center'>
        <Button onClick={this.toggleVisibility} >Toolbar</Button>
        <Sidebar.Pushable >
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible}>
            <ToolBar />
          </Sidebar>
          <Sidebar.Pusher>
              
            <Segment id="toolSegment" basic>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

module.exports= ToggleTools;