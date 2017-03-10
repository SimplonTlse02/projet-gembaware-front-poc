import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'


class PhoneInput extends Component{
	setCountry() {
    let userCountry = window.navigator.language;
    const prefixList = {
	
      "en-US": "+011",
      "fr": "+336"
    }
    return prefixList[userCountry];
  }
	render(){
		return(
			 
          	

        	<Form onSubmit={this.handleSubmit}>
        <label>Saisir numéro de téléphone :
		        <Input
		            id="phone-input"
		            defaultValue={this.setCountry()} 
		            type="phone">
		         </Input>
        	</label>
        <Button type="submit" value="Submit">Valider
        </Button>
        
      </Form>
			)
	}
}
module.exports = PhoneInput;