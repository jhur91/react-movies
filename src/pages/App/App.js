import React, { Component } from 'react';
import './App.css';
import * as movieAPI from '../../services/movies-api';
import * as commentAPI from '../../services/comments-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
  /*--- State ---*/
  state = {
    movies: [],
    comments: [],
    user: userService.getUser()
  };


  /*--- Handle Methods ---*/

  handleAddComment = async newCommentData => {
    const newComment = await commentAPI.create(newCommentData);
    this.setState(state => ({
      comments: [...state.comments, newComment]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const allMovies = await movieAPI.getAll();
    const allComments = await commentAPI.getAll();
    const movies = allMovies.results;
    const comments = allComments.comments;
    this.setState({ 
      movies: movies,
      comments: comments
     });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Movies Review APP</header>
          <nav>
            <NavLink exact to='/'>Movies LIST</NavLink>
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
          <Route exact path='/details' render={({location}) => 
            <MovieDetailPage 
              movies={this.state.movies}
              comments={this.state.comments}
              location={location}
              handleAddComment={this.handleAddComment} 
              />
          } />

        </Switch>

      </div>
    );
  }
}

export default App;
