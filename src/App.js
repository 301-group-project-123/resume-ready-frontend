import React from 'react';
import Header from './Header';
import About from './pages/About';
import Collection from './pages/Collection';
import Profile from './pages/Profile';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
          <Header className="App-header" />
          <Routes>
            <Route
              exact path="/"
              element={<Movie />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/collection"
              element={<Collection />}
            >
            </Route>
            <Route
              exact path="/profile"
              element={<Profile />}
            >
            </Route>

            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
