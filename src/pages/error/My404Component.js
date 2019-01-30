import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default  class My404Component extends Component {



  render() {
    return (
      <div className="main table-position">

        <h2 className="change-color">Error 404 (:</h2>
        Got to <Link to="/sign-in" className="">Sign In</Link> and try again

      </div>




    );
  }
}
