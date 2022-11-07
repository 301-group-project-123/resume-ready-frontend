import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
// import MovieForm from './components/MovieForm';
// import MovieDisplay from './components/MovieDisplay';
// import MovieModal from './components/MovieModal';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      zip: e.target.value
    })
  }

  getMovieData = async (e) => {
    try {
      let movieUrl = await axios.get(`${process.env.REACT_APP_SERVER}/`);
      this.setState({
        movieInfo: movieUrl.data
      });
      console.log(movieUrl);
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }
  
  render(){
    return(
      <>
      <Form onSubmit={this.getMovieData}>
      <Form.Group controlId="title">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" defaultValue={this.state.zip}/>
      </Form.Group>
      <Button type="submit">Look For Movies!</Button>
    </Form>
    </>
    )
  }
}

export default Movies;