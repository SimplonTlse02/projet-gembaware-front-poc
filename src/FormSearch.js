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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Rechercher:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button type="submit" value="Submit">Valider
        </Button>
      </Form>
    );
  }
}
module.exports = FormSearch;