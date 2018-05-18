import React from 'react';
import {render} from 'react-dom';

import FriendList from './FriendList';
import ButtonAppBar from './ButtonAppBar.js';
import ChatroomPaper from './ChatroomPaper.js';
import InputField from './InputField.js';
import FriendTopBar from './FriendTopBar.js';
import Grid from '@material-ui/core/Grid';

class ChatLayout extends React.Component {
  
  componentWillMount = () => {
    console.log("componentWillMount()");
    var retrievedObject = localStorage.getItem('userInfo');
    if(retrievedObject == null) {
      window.alert('登入無效，請重新登入！');
      window.location = '/login';
    } else {
      // window.alert(retrievedObject + '\n登入成功！');  
    }
  };

  render() {
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