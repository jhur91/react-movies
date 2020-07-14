import React, { Component } from 'react';
import './App.css';
import * as movieAPI from '../../services/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  /*--- State ---*/
  state = {
    movies: []
  };

  /*--- Handle Methods ---*/

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const movies = await movieAPI.getAll();
    this.setState({movies});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">MY APP</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MoviesList movies={this.state.movies} />
          }/>
          {/* <Route exact path='/all' render={() =>
			      <GuitarIndex />
          }/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
