import { Component } from 'react';
import {Card, Button, Row, Container, Col, ListGroup} from 'react-bootstrap';
import '../moviedisplay.css'

class MovieDisplay extends Component {
  render(){
    return (
      <>
        <Container>
        <Row xs={1} sm={3} md={4} lg={5}>

        {this.props.movies.map((movie, index)=>
        <Col className='m-4'>
      <Card className='p-3' border="info" style={{ width: '19rem', height: '40rem', backgroundColor: 'black' }}>
      <Card.Body key={index}>
        <Card.Img variant="top" style={{height:'27vh'}}src={`http://fanc.tmsimg.com/${movie.poster}`} />  
        <Card.Title style={{color:'white'}}>{movie.title}</Card.Title> 
        <ListGroup style={{backgroundColor: 'gray' }} className="list-group-flush">
        <ListGroup.Item style={{backgroundColor: 'black', color:'white' }} >{movie.description}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'black', color:'white' }} >{movie.theatre}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'black', color:'white' }} >{movie.genres}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'black', color:'white' }} >{movie.dateTime}</ListGroup.Item>
      </ListGroup>
        {/* <Card.Text>{movie.description}</Card.Text> 
        <Card.Text>{movie.theatre}</Card.Text>    
        <Card.Text>{movie.genres}</Card.Text> 
        <Card.Text>{movie.dateTime}</Card.Text>  */}
        <Button variant="info" onClick={()=> {this.props.postMovie(movie)}}>Save To Collection</Button>
        </Card.Body>
        </Card>
        </Col>
        )}
        </Row>
        </Container>
      </>
    )
  }
}

export default MovieDisplay;