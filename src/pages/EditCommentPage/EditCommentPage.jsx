import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditCommentPage extends Component {
  state = {
    invalidForm: false,
    // Refer to CommentListItem to see how comment is being passed via the <Link>
    formData: this.props.location.state
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateComment(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    console.log(this.state)
    return (
      <>
        <h1>Edit Comment</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Comment (required)</label>
            <input
              className="form-control"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Rating ( 1 - 5 )</label>
            <input
              className="form-control"
              name="rating"
              value={this.state.formData.rating}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE COMMENT
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditCommentPage;