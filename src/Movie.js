import React from 'react';
// import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import MovieForm from './components/MovieForm';
// import MovieDisplay from './components/MovieDisplay';
// import MovieModal from './components/MovieModal';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      zip: '',
      startDate: '',
      movies: []
    })
  }

  handleZipInput = (e) => {
    e.preventDefault();
    this.setState({
      zip: e.target.value
    });
    // console.log(e.target.startDate.value);
  }

  handleDateInput = (e) => {
    e.preventDefault();
    this.setState({
      startDate: e.target.value });
    // console.log(e.target.startDate.value);
  }

  getMovieData = async (e) => {
    // console.log(this.state.movies);
    e.preventDefault();
    try {

      let movieUrl = await axios.get(`${process.env.REACT_APP_SERVER}/movies?startDate=${this.state.startDate}&zip=${this.state.zip}`);

      console.log(movieUrl);

      this.setState({
        movies: movieUrl.data
      });

      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }
  
  render(){
    console.log(this.state.movies);
    return(
      <>
      <MovieForm 
      getMovieData={this.getMovieData}
      handleZipInput={this.handleZipInput}
      handleDateInput={this.handleDateInput}
      />
      {/* <Form onSubmit={this.getMovieData}>
      <Form.Group controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder='zip code'/>
      </Form.Group>
      <Form.Group controlId="startDate">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button type="submit">Look For Movies!</Button>
    </Form> */}
    </>
    )
  }
}

export default Movies;