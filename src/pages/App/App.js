import React, { Component } from 'react';
import './App.css';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  /*--- State ---*/

  /*--- Handle Methods ---*/

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div className="App">
        <header className="App-header">MY APP</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MoviesList />
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
