import React, { Component } from 'react';

//put anything you want displayed on ALL pages here


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  (
      <div>
       Hello World!
       {this.props.children}
      </div>
    );
  }
}
