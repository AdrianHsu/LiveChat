import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    padding: 10,
    backgroundColor: theme.palette.background.paper,
  },
  icon :{
    width: 55,
    height: 55
  },
  item :{
    padding: 20,
  }
});

class ListMessages extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <List
        subheader={<ListSubheader component="div">您的朋友</ListSubheader>}>
          <ListItem key={0} dense button className={classes.item}>
            <Avatar alt="Remy Sharp" src="img/ppl-1.jpg" className={classes.icon}/>
            <ListItemText primary="Adrian Hsu" secondary="測試測試測試"/>
            <Badge color="secondary" badgeContent={4} className={classes.margin}>
            </Badge>
          </ListItem>
          <Divider></Divider>
          <ListItem key={0} dense button className={classes.item}>
            <Avatar alt="Remy Sharp" src="img/ppl-1.jpg" className={classes.icon}/>
            <ListItemText primary="Adrian Hsu" secondary="測試測試測試"/>
            <Badge color="secondary" badgeContent={4} className={classes.margin}>
            </Badge>
          </ListItem>
          <Divider></Divider>
        </List>
      </Card>
     )};
};

export default  withStyles(styles)(ListMessages);