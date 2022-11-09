import { Component } from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import MovieModal from '../components/MovieModal';
import { withAuth0 } from '@auth0/auth0-react';

class CollectionOfMovies extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      collectMovies: [],
      error: false,
      openModal: false,
      selectedMovie:{}
    })
  }

  getDataBase = async () => {
    // console.log(this.state.movies);
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
  
        const jwt = res.__raw;
  
        console.log('token:  ', jwt);
        
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          baseURL: process.env.REACT_APP_SERVER,
          method: 'get',
          url: '/movie',
        }

        let movieUrl = await axios(config);
  
        console.log(movieUrl);
  
        this.setState({
          collectMovies: movieUrl.data
        });
      }
 
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  deleteMovie = async (id) => {
    try {
      console.log(id);
      let url = `${process.env.REACT_APP_SERVER}/movie/${id}`;

      await axios.delete(url);

      let updatedMovies = this.state.collectMovies.filter(movie => movie._id !== id);

      this.setState({
        collectMovies: updatedMovies
      });

    } catch (error) {
      console.log(error.message);
    }
  };

  updatedMovie = async (movie) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
  
        const jwt = res.__raw;
  
        console.log('token:  ', jwt);
        
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          baseURL: process.env.REACT_APP_SERVER,
          method: 'put',
          url: `/movie/${movie._id}`,
          data: {
            movie
          }
        }

        console.log(movie);
        let updatedMovie = await axios(config);
        let updatedMoviesArray = this.state.collectMovies.map(existingMovie => {
          return existingMovie._id === movie._id
            ? updatedMovie.data
            : existingMovie;
        });
  
        this.setState({
          collectMovies: updatedMoviesArray
        });
  
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  // handleMovieSubmit = (event) => {
  //   event.preventDefault();
  //   let newMovie = {
  //     review: event.target.value
  //   };
  //   this.setState({
  //     openModal: false
  //   });
  //   this.props.postMovie(newMovie);
  // };

  updateCloseModal = () => {
    this.setState({
      openModal: false,
    });
  };

  updateOpenModal = (movieObj) => {
    this.setState({
      openModal: true,
      selectedMovie: movieObj
    });
  };

  componentDidMount(){
    this.getDataBase();
  };

  render() {
    // TODO: render information about Collection
    return (
      <>
      <Card>
        {this.state.collectMovies.map((movie, index)=>
      <Card.Body key={index}>
        {/* <Card.Img variant="top" src={`http://developer.tmsimg.com/${movie.poster}?api_key=dv39ufj7ka8w8jttvcpbsg9j`} />   */}
        <Card.Title>{movie.title}</Card.Title> 
        <Card.Text>{movie.description}</Card.Text> 
        <Card.Text>{movie.theatre}</Card.Text>    
        <Card.Text>{movie.genres}</Card.Text> 
        <Card.Text>{movie.dateTime}</Card.Text>
        {movie.review && 
        <Card.Text>{movie.review}</Card.Text>
        }
        <Button onClick={()=> {this.deleteMovie(movie._id)}}>Delete From Collection</Button>
        <Button onClick={()=> {this.updateOpenModal(movie)}}>Leave A Review</Button>
        </Card.Body>
        )}
        </Card>
        <MovieModal
        openModal={this.state.openModal}
        updateCloseModal={this.updateCloseModal}
        updatedMovie={this.updatedMovie}
        selectedMovie={this.state.selectedMovie}
        // handleMovieSubmit={this.handleMovieSubmit}
        />
      </>
    );
  }

}

export default withAuth0(CollectionOfMovies);