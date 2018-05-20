import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  input: {
    width: '100%',
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class InputBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msg: ""
    }
  }
  handleInput = e => {
    this.setState({
      msg: e.target.value
    });
    // console.log(this.state.msg);

  };
  sendMessage = e => {
    e.preventDefault();
    const msg = this.state.msg;
    if (msg.length === 0) {
      alert("string length must > 0");
      return;
    }
    // console.log(this.state.msg);
    this.props.sendMsgCallback(msg);
    this.setState({
      msg: ""
    });
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.sendMessage(e);
    }
  }

  render() {
    const { classes } = this.props;
    if(this.props.pickFriendBoolean === false) {
      return null;
    }
    return (
      <Grid container className={classes.root} spacing={24}>
      <Grid item sm={10}>
      <Input
      placeholder="Write your message..."
      className={classes.input}
      value={this.state.msg}
      onChange={e => this.handleInput(e)}
      onKeyPress={e => this.handleKeyPress(e)}
      inputProps={{
        'aria-label': 'Description',
      }}/>
      </Grid>
      <Grid item sm={2}>
      <Button 
        className={classes.button} 
        variant="outlined" 
        onClick={e => this.sendMessage(e)}
        color="primary">
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      </Grid>
      </Grid>
    );
  }
}

InputBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputBox);
