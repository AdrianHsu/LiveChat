import React from 'react';
import {render} from 'react-dom';
import ChatGridLayout from './ChatGridLayout';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<ChatGridLayout></ChatGridLayout>);
  }
}

render (<App/>, document.getElementById('app'));
