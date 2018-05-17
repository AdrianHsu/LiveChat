import React from 'react';
import {render} from 'react-dom';
import Login from './Login.js';
import SignUp from './SignUp.js';

import ListMessages from './ListMessages.js';
import ButtonAppBar from './ButtonAppBar.js';
import ChatroomPaper from './ChatroomPaper.js';
import InputField from './InputField.js';
import FriendTopBar from './FriendTopBar.js';

import Grid from '@material-ui/core/Grid';


class App extends React.Component {
  render() {
    // return <Login></Login>;
    // return <SignUp></SignUp>;
    return (
      <div>
        <FriendTopBar></FriendTopBar>
      <ChatroomPaper></ChatroomPaper>
      <InputField></InputField>

      {/* <Grid container spacing={24}>
        <Grid item xs>
          <ListMessages></ListMessages>
        </Grid>
        <Grid item xs={9}>
          <p>3</p>
        </Grid>
      </Grid> */}
    </div>);
  }
}

render (<App/>, document.getElementById('app'));
