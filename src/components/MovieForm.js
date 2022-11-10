import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../form.css'

class FormBuild extends React.Component {


render(){
  return(
    <>
    <div id="form">
    <Form style={{ width: '15rem', height: '25rem' }} onSubmit={this.props.getMovieData}>
    <Form.Group controlId="zip">
      <Form.Label style={{fontSize:'1.1vw', color:'white'}}>Zip Code</Form.Label>
      <Form.Control onInput={this.props.handleZipInput} type="text" placeholder='zip code'/>
    </Form.Group>
    <Form.Group controlId="startDate">
      <Form.Label style={{fontSize:'1.1vw', color:'white'}}>Date</Form.Label>
      <Form.Control onInput={this.props.handleDateInput} type="date" />
    </Form.Group>
    <Button id="formButton" variant="info" type="submit">Look For Movies!</Button>
  </Form>
  </div>
  </>
  )
}
}

export default FormBuild;