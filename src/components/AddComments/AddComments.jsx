import React, {Component} from 'react';

class AddComments extends Component {
  state = {
    invalidForm: true,
    formData: {
      content: '',
      rating: '5',
      // id: {props.id}
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddComment(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Add Comment</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Comment (required)</label>
            <input
              className="form-control"
              name="content"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Ratin ( 1 - 5 )</label>
            <input
              className="form-control"
              name="rating"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD COMMENT
          </button>
        </form>
      </>
    );
  }
}
export default AddComments;







// import React from 'react';
// import { render } from '@testing-library/react';

// function Comments(props){

//     return(
//       <>
//         <h3>Reviews</h3>
//         <form className="form-horizontal" >
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="text" className="form-control" placeholder="Name"  name="name" />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12 text-center">
//               <button className="btn btn-default" >Add Review</button>&nbsp;&nbsp;
//             </div>
//           </div>
//         </form>
//       </>
//     );
// }

// export default Comments;