import React from 'react';
import {Form, Button} from 'react-bootstrap';

class FormBuild extends React.Component {


render(){
  return(
    <>
    <Form onInput={this.props.handleInput} onSubmit={this.props.getMovieData}>
    <Form.Group controlId="zip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control type="text" placeholder='zip code'/>
    </Form.Group>
    <Form.Group controlId="startDate">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
    <Button type="submit">Look For Movies!</Button>
  </Form>
  </>
  )
}
}

export default FormBuild;