import React from 'react';
// import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import MovieForm from './components/MovieForm';
import MovieDisplay from './components/MovieDisplay';
import AuthButtons from './AuthButton';
import { withAuth0 } from '@auth0/auth0-react';

// import MovieDisplay from './components/MovieDisplay';
// import MovieModal from './components/MovieModal';
// import Collection from './pages/Collection';

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
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
  
        const jwt = res.__raw;
  
        console.log('token:  ', jwt);
        
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          baseURL: process.env.REACT_APP_SERVER,
          method: 'get',
          url: '/movies',
          params: {
            startDate:this.state.startDate,
            zip:this.state.zip
          }
        }

        let movieUrl = await axios(config);
  
        console.log(movieUrl);
  
        this.setState({
          movies: movieUrl.data
        });
      }



      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  postMovie = async (movie) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movie`;

      await axios.post(url, movie);

      // this.setState({
      //   movies: [...this.state.movies, savedMovie.data]
      // });

    } catch (error) {
      console.log(error.message);
    }
  };
  
  render(){
    console.log(this.state.movies);
    return(
      <>
      <AuthButtons />
      <MovieForm 
      getMovieData={this.getMovieData}
      handleZipInput={this.handleZipInput}
      handleDateInput={this.handleDateInput}
      />
      <MovieDisplay
      movies={this.state.movies}
      zip={this.state.zip}
      startDate={this.state.startDate}
      postMovie={this.postMovie}
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

export default withAuth0(Movies);