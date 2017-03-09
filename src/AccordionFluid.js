import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class AccordionFluid extends Component{

	render(){ 
		return(
			<Accordion>
			    <Accordion.Title>
			      <Icon name='dropdown' />
			      Favoris
			    </Accordion.Title>
				    <Accordion.Content>
				      <p>
				       
				      </p>
				    </Accordion.Content>
				 <Accordion.Title>
			      <Icon name='dropdown' />
			      System Config
			    </Accordion.Title>
				    <Accordion.Content>
				      <p>
				       
				      </p>
				    </Accordion.Content>    
			    <Accordion.Title>
			      <Icon name='dropdown' />
			      Business
			    </Accordion.Title>
				    <Accordion.Content>
				      <p>
				        
				      </p>
				    </Accordion.Content>
			    <Accordion.Title>
			      <Icon name='dropdown' />
			     Product
			     	<Accordion.Content>
				      <p>
				        
				      </p>
				    </Accordion.Content>
			    </Accordion.Title>
			    <Accordion.Title>
			      <Icon name='dropdown' />
			     Sales O.
			     	<Accordion.Content>
				      <p>
				        
				      </p>
				    </Accordion.Content>
			    </Accordion.Title>
			   
			</Accordion>
	  	)
	}
}
module.exports = AccordionFluid;