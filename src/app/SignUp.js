import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends React.Component {
  render() {
    return (
      <Dialog 
        open 
        onRequestClose={this.props.toggleLogin}
        fullScreen={this.props.fullScreen}>
        <DialogTitle>註冊</DialogTitle>
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
          <Button onClick={this.props.toggleLogin} color="secondary">
            登入
          </Button>
          <Button onClick={this.props.toggleLogin} color="primary">
            訪客模式
          </Button>
          <Button onClick={this.props.toggleLogin} color="primary">
            確認
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Login;