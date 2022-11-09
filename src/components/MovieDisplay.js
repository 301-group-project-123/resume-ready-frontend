import { Component } from 'react';
import {Card, Button, Row, Container, Col} from 'react-bootstrap';
import Placeholder from '../images/placeholder.jpg'
import '../moviedisplay.css'

class MovieDisplay extends Component {
  render(){
    return (
      <>
        <Container>
        <Row xs={1} sm={3} md={4} lg={5}>

        {this.props.movies.map((movie, index)=>
        <Col className='m-4'>
      <Card className='p-3' >
      <Card.Body key={index}>
        {/* <Card.Img variant="top" src={`http://developer.tmsimg.com/${movie.poster}&api_key=be38dnxddupkyj7xnx3zgs76`} />   */}
        <Card.Img variant="top" src={`${Placeholder}`} />
        <Card.Title>{movie.title}</Card.Title> 
        <Card.Text>{movie.description}</Card.Text> 
        <Card.Text>{movie.theatre}</Card.Text>    
        <Card.Text>{movie.genres}</Card.Text> 
        <Card.Text>{movie.dateTime}</Card.Text> 
        <Button onClick={()=> {this.props.postMovie(movie)}}>Save To Collection</Button>
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