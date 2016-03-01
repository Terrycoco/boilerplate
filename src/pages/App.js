import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWindowSize } from 'actions/index';
//put anything you want displayed on ALL pages here


class App extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize(e) {
    this.props.setWindowSize(window.innerWidth);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    return  (
      <div>
       Hello World!
       <br/>Window Size is: {this.props.winSize}
       <br/>Change breakpoints in actions/index
       {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    winSize: state.app.windowSize
  };
}

export default connect(mapStateToProps, { setWindowSize })(App);
