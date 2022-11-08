import React from 'react';
import {Form, Button} from 'react-bootstrap';

class FormBuild extends React.Component {


render(){
  return(
    <>
    <Form onSubmit={this.props.getMovieData}>
    <Form.Group controlId="zip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control onInput={this.props.handleZipInput} type="text" placeholder='zip code'/>
    </Form.Group>
    <Form.Group controlId="startDate">
      <Form.Label>Date</Form.Label>
      <Form.Control onInput={this.props.handleDateInput} type="text" />
    </Form.Group>
    <Button type="submit">Look For Movies!</Button>
  </Form>
  </>
  )
}
}

export default FormBuild;