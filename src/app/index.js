import React from 'react';
import {render} from 'react-dom';
import Login from './Login.js';
import SignUp from './SignUp.js';

import FriendList from './FriendList';
import ButtonAppBar from './ButtonAppBar.js';
import ChatroomPaper from './ChatroomPaper.js';
import InputField from './InputField.js';
import FriendTopBar from './FriendTopBar.js';
import ChatLayout from './ChatLayout.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // return <Login></Login>;
    // return <SignUp></SignUp>;
    return (
        <ChatLayout></ChatLayout>);
  }
}

render (<App/>, document.getElementById('app'));
