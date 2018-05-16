import React from 'react';
import {render} from 'react-dom';
import Login from './Login.js';
import SignUp from './SignUp.js';

class App extends React.Component {
  render() {
    // return <Login></Login>;
    return <SignUp></SignUp>;
  }
}

render (<App/>, document.getElementById('app'));
