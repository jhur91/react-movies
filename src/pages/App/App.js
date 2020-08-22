import React, { Component } from 'react';
import './App.css';
import * as movieAPI from '../../services/movies-api';
import * as commentAPI from '../../services/comments-api';
import * as newsAPI from '../../services/news-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import NavBar from '../../components/NavBar/NavBar';
import NewsList from '../../components/NewsList/NewsList';
import NewsDetailPage from '../NewsDetailPage/NewsDetailPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import EditCommentPage from '../EditCommentPage/EditCommentPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import userService from '../../utils/userService';


class App extends Component {
  /*--- State ---*/
  state = {
    movies: [],
    comments: [],
    news: [],
    menuClicked: false,
    user: userService.getUser()
  };


  /*--- Handle Methods ---*/

  handleAddComment = async newCommentData => {
    const newComment = await commentAPI.create(newCommentData);
    // newComment.user.name = this.state.user.name
    const comment = newComment.comment;
    comment.user = {};
    comment.user.name = newComment.commentUser.name;
    this.setState(state => ({
      comments: [...state.comments, comment]
    }),
    // Using cb to wait for state to update before rerouting
    // () => this.props.history.push('/'));
    () => console.log('hi'));

  }

  handleUpdateComment = async updatedCommentData => {
    const updatedComment = await commentAPI.update(updatedCommentData);
    // Using map to replace just the comment that was updated
    const newCommentsArray = this.state.comments.map(c => 
      c._id === updatedComment._id ? updatedComment : c
    );
    this.setState(
      {comments: newCommentsArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
  }

  handleDeleteComment= async id => {
    await commentAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      comments: state.comments.filter(c => c._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleMenuClick = () => {
    this.setState(
      {menuClicked:!this.state.menuClicked}
    )
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const allMovies = await movieAPI.getAll();
    const allComments = await commentAPI.getAll();
    const allNews = await newsAPI.getAll();
    const movies = allMovies.results;
    const comments = allComments.comments;
    const news = allNews.articles;
    this.setState({ 
      movies: movies,
      comments: comments,
      news: news
     });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        <button className="openbtn" onClick={this.handleMenuClick}><img src="https://img.icons8.com/ios/72/menu.png" alt=""/></button>
        <div className="sidebar" id="mySidebar" style={this.state.menuClicked ? {"display": "block"}: {"display": "none"}}>
          <div className="closebtn-container" ><button className="closebtn" onClick={this.handleMenuClick}>X</button></div>
            <NavLink exact to='/' className="NavLink">Movies LIST</NavLink>
            <br></br>
            <NavLink exact to='/news' className="NavLink">News LIST</NavLink>
        </div>
          <NavLink exact to='/' className="FilmReviewTitle">FilmReview</NavLink>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          </header>
        <Switch >
          <Route exact path='/' render={() =>
            <MoviesList 
              className="MoviesList"
              movies={this.state.movies}
            />
          }/>
          <Route exact path='/news' render={() =>
            <NewsList 
              news={this.state.news}
            />
          }/>
          <Route exact path='/newsdetail' render={({location}) =>
            <NewsDetailPage
              news={this.state.news}
              location={location}
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
              user={this.state.user}
              movies={this.state.movies}
              comments={this.state.comments}
              location={location}
              handleAddComment={this.handleAddComment}
              handleDeleteComment={this.handleDeleteComment} 
              />
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditCommentPage
              handleUpdateComment={this.handleUpdateComment}
              location={location}
            />
          }/>
        </Switch>
        <footer><div className="footerText">Created by Jason Hur</div></footer>

      </div>
    );
  }
}

export default App;
