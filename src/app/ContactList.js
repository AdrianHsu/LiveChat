import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import axios from 'axios';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 10,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    position: 'relative',
    maxHeight: 700,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  title: {
    margin: `${theme.spacing.unit * 1}px 0 ${theme.spacing.unit * 1}px`,
  },
});

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.friendList = []; // doesn't need to be "state"
  }
  componentWillMount = () => {
    var _self = this;
    axios.get('/user/allusers', {
      params: {
        username: this.props.username
      }
    })
    .then(function (res){
      // console.log(res['data']);
      for(var i = 0; i < res['data'].length; i++) {
        var friend = JSON.parse(res['data'][i]);
        _self.friendList.push(friend);
      } 
      _self.forceUpdate();
      // console.log(_self.friendList);
    })
    .catch(function (error) {
      console.log(error);
    });  
  };
  pickFriendCallback = (e, name, icon) => {
    e.preventDefault();
    this.props.pickFriendCallback(e, name, icon);
  }

  render() {
    const { classes } = this.props;

    var listItems = this.friendList.map(item => (
      <ListItem button divider
      key={item.friendname}
      onClick={(e) => this.pickFriendCallback(e, item.friendname, item.icon)}
      >
      <Avatar src={item.icon} />
      <ListItemText primary={item.friendname} secondary="干你屁事" />
      <Badge color="secondary" badgeContent={0} className={classes.margin}></Badge>
      </ListItem> 
    ));
    return (
      <div>
        <Typography variant="title" className={classes.title} style={{margin: 10}}>
              朋友名單
        </Typography>
        <List className={classes.root}>
          {listItems}
        </List>
      </div>
    );
  }
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactList);
