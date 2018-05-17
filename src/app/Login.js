import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

class Login extends React.Component {
  
  toggleLogin(e) {
    axios.post('/user', {
      username: 'b03901023',
      password: 'nanana',
      updateTime: Date.now()
    })
    .then(function (res) {
      if(res.data._message == null) { // _message is ERROR message
        console.log(res.data);
      } else {
        console.log(res.data._message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });  
  };

  render() {
    return (
      <Dialog 
        open 
        onRequestClose={this.toggleLogin}
        fullScreen={this.props.fullScreen}>
        <DialogTitle>登入</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請輸入您的帳號與密碼。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="帳號"
            type="account"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="密碼"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.toggleLogin} color="secondary">
            註冊
          </Button>
          <Button onClick={this.toggleLogin} color="primary">
            訪客模式
          </Button>
          <Button onClick={this.toggleLogin} color="primary">
            確認
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Login;