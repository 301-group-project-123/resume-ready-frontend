import { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class MovieDisplay extends Component {
  render(){
    return (
      <>
      <Card>
        {this.props.movies.map((movie, index)=>
      <Card.Body key={index}>
        {/* <Card.Img variant="top" src={`http://developer.tmsimg.com/${movie.poster}&api_key=be38dnxddupkyj7xnx3zgs76`} />   */}
        <Card.Title>{movie.title}</Card.Title> 
        <Card.Text>{movie.description}</Card.Text> 
        <Card.Text>{movie.theatre}</Card.Text>    
        <Card.Text>{movie.genres}</Card.Text> 
        <Card.Text>{movie.dateTime}</Card.Text> 
        <Button onClick={()=> {this.props.postMovie(movie)}}>Save To Collection</Button>
        </Card.Body>
        )}
        </Card>
      </>
    )
  }
}

export default MovieDisplay;