import React from 'react';
import { render } from '@testing-library/react';

function Comments(props){

    return(
      <>
        <h3>Reviews</h3>
        <form className="form-horizontal" >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name"  name="name" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" >Add Review</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </>
    );
}

export default Comments;