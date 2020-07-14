import React, { Component } from 'react';
import './App.css';
import * as movieAPI from '../../services/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import { Route, Switch, NavLink } from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
  /*--- State ---*/
  state = {
    movies: [],
    user: userService.getUser()
  };

  /*--- Handle Methods ---*/
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const movies = await movieAPI.getAll();
    this.setState({movies});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Movies Review APP</header>
          <nav>
            <NavLink exact to='/api/movies'>Movies LIST</NavLink>
          </nav>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        <Switch>
          <Route exact path='/' render={() =>
            <MoviesList 
              movies={this.state.movies} 
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
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
