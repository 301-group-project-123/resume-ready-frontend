import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Collection from './pages/Collection';
import Profile from './pages/Profile';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
// import Logout from './Logout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact path="/"
              element={
                this.props.auth0.isAuthenticated ?
                  <>
                    <Header className="App-header" />
                    {/* <Logout/> */}
                    <Movie />
                    <Footer />

                  </>
                  : <Login />
              }
            >
            </Route>
            <Route
              exact path="/about"
              element={
              <>
              <Header className="App-header" />
              <About />
              <Footer />
              </>
              }
            >
            </Route>
            <Route
              exact path="/collection"
              element={
              <>
               <Header className="App-header" />
               <Collection />
               <Footer />
              </>
             }
            >
            </Route>
            <Route
              exact path="/profile"
              element={
              <>
               <Header className="App-header" />
               <Profile />
               <Footer />
              </>
             }
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
