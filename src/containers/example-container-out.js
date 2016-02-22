//example of container that needs to dispatch actions out
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from 'actions/index';

class ExampleOut extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.exampleProp}
      </div>
    );
  }
}


//must be second arg
export default connect( null, { fetchPost, deletePost })(ExampleOut);
