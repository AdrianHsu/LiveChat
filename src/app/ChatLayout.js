import React from 'react';
import {render} from 'react-dom';
import Login from './Login.js';
import SignUp from './SignUp.js';

import FriendList from './FriendList';
import ButtonAppBar from './ButtonAppBar.js';
import ChatroomPaper from './ChatroomPaper.js';
import InputField from './InputField.js';
import FriendTopBar from './FriendTopBar.js';
import Grid from '@material-ui/core/Grid';

class ChatLayout extends React.Component {
  render() {
    // return <Login></Login>;
    // return <SignUp></SignUp>;
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <FriendList></FriendList>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FriendTopBar></FriendTopBar>
        <ChatroomPaper></ChatroomPaper>
        <InputField></InputField>
        </Grid>
      </Grid>
      </div>);
  }
}

export default (ChatLayout);