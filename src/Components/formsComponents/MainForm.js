import React, { Component } from 'react';
import { Form, FormGroup, FormControl ,Button, Col} from 'react-bootstrap';

class MainForm extends Component {
  render() {
    return (
      <div className="container-fluid">
    <Form className="form-inline">
    <FormGroup >
    <FormControl type="text" placeholder="Enter Summoner's name..." />
  	</FormGroup>
 	<Button type="submit">Search</Button>
	</Form>
      </div>
    );
  }
}

export default MainForm;