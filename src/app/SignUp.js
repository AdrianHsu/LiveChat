import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      field_user: "",
      field_pass: "",
      error: false
    };
  }
  componentWillMount = () => {
    console.log("componentWillMount()");
    var retrievedObject = localStorage.getItem('userInfo');
    if(retrievedObject != null) {
      window.alert(retrievedObject + '\n您已經登入，重新導向至聊天室...');
      window.location = '/chatroom';
    }
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      error: false
    });
  };

  toggleSignUp = e => {

    const _self = this;
    // Math.random().toString(36).substr(2, 5);
    axios.post('/user/signup', {
      username: this.state.field_user,
      password: this.state.field_pass,
      updateTime: Date()
    })
    .then(function (res) {
      if(res.data._message == null) { // no error
        console.log(res.data);
        window.alert(res.data + '\n註冊成功！');
        _self.loginPage();
      } else { // _message is ERROR message, error occurs!
        console.log(res.data._message);
        window.alert(res.data._message);
        _self.setState({
          error: true,
          field_user: "",
          field_pass: ""
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });  
  };

  loginPage = e => {
    axios.get('/redirect?page=login')
    .then(function (res) {
      console.log(res);
      window.location = '/login';
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  render() {
    return (
      <Dialog 
        open 
        onRequestClose={this.toggleLogin}
        fullScreen={this.props.fullScreen}>
        <DialogTitle>註冊</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請輸入您的暱稱與密碼。
          </DialogContentText>
          <TextField
            autoFocus
            error={this.state.error}
            margin="dense"
            id="username"
            label="暱稱"
            type="username"
            value={this.state.field_user}
            onChange={this.handleChange('field_user')}
            fullWidth
          />
          <TextField
            autoFocus
            error={this.state.error}
            margin="dense"
            id="password"
            label="密碼"
            type="password"
            value={this.state.field_pass}
            onChange={this.handleChange('field_pass')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.loginPage} color="secondary">
            退回
          </Button>
          <Button onClick={this.toggleSignUp} color="primary">
            確認
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignUp;