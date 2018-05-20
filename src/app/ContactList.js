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

function NotifBadge(props) {
  if(props.notifNum === 0) {
    return null;
  }
  return <Badge color="secondary" badgeContent={props.notifNum} ></Badge>;
}

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  pickFriendCallback = (e, name, icon) => {
    e.preventDefault();
    this.props.pickFriendCallback(e, name, icon);
  }

  render() {
    const { classes } = this.props;
    var listItems = this.props.friendList.map(item => (
      <ListItem button divider
      key={item.friendname}
      onClick={(e) => this.pickFriendCallback(e, item.friendname, item.icon)}
      >
      <Avatar src={item.icon} />
      <ListItemText primary={item.friendname} secondary={item.lastMsg} />
      <NotifBadge notifNum={item.notifNum}/>
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
