import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class FormSearch extends Component{ 
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    var valuInput = this.state.value;
    document.getElementById('view').innerHTML = valuInput;
    console.log(valuInput);
    
   
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                id='inputVal' 
                placeholder='Rechercher' />
        </label>
        <Button type="submit" value="Submit" fluid>Valider
        </Button>
        
      </Form>
    );
  }
}
module.exports = FormSearch;