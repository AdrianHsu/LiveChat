import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContactList from './ContactList.js';
import ChatRoomLayout from './ChatRoomLayout.js';
import { Grid } from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar.js';
import axios from 'axios';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class ChatGridLayout extends React.Component{
  constructor(props) {
    super(props);
    this.state = ({
      username: "",
      icon: "",
      friendname: "chatbot",
      friendicon: "./assets/bot.png",
      messageList: []
    });
    
  }
  componentDidMount(){
    var retrievedObject = sessionStorage.getItem('userInfo');
    if(retrievedObject == null) {
      window.alert('登入無效，請重新登入！');
      window.location = '/login';
    } else {
      // window.alert(retrievedObject + '\n登入成功！');
      // console.log(retrievedObject);
      retrievedObject = JSON.parse(retrievedObject);
      var myicon = '';
      axios.get('/user/myicon', {
        params: {
          username: retrievedObject.username
        }
      })
      .then((res) => {
        myicon = res['data']['icon'];
        this.setState({
          username: retrievedObject.username,
          icon: myicon
        });
        document.title = retrievedObject.username;
      })
      .catch(function (error) {
        console.log(error);
      });  
    }
  }
  addMsgCallback = (item) => {
    this.setState({
      messageList: this.state.messageList.concat(item)
    }, () => {
      // console.log(this.state.messageList);
    });
  }

  pickFriendCallback = (e, name, icon) => {
    this.setState({
      friendname: name,
      friendicon: icon,
      messageList: []
    });
  };

  render() {
    const { classes } = this.props;
    if(this.state.username === "" || this.state.icon === ""){
      // console.log('null!!');
      return null;
    }
    
    return (
      <div>
        <ButtonAppBar username={this.state.username}/>
      <Grid container className={classes.root} spacing={24}>
      <Grid item xs={8} sm={3}>
      <ContactList username={this.state.username}
        pickFriendCallback={this.pickFriendCallback}></ContactList>
      </Grid>
      <Grid item xs={12} sm={9}>
      <ChatRoomLayout className={classes.paper} username={this.state.username}
        friendname={this.state.friendname} friendicon={this.state.friendicon} 
        icon={this.state.icon} messageList={this.state.messageList} addMsgCallback={this.addMsgCallback}/>
      </Grid>
      </Grid>
      </div>
    );
  }
}
ChatGridLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatGridLayout);