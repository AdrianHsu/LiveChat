import React from 'react';
import {render} from 'react-dom';
import ChatLayout from './ChatLayout.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
  return (<ChatLayout></ChatLayout>);
  }
}

render (<App/>, document.getElementById('app'));
