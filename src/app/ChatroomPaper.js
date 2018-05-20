import React from 'react';
import { ThemeProvider, MessageList, MessageGroup, Message,
     MessageText } from '@livechat/ui-kit';

class ChatRoomPaper extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const friendname = this.props.friendname;
    const friendicon = this.props.friendicon;

    var msgItems = this.props.messageList.map( (item, i) => (
    <Message avatarUrl={item.avatarUrl}
      key={item.time + i}
      date={item.time} isOwn={item.isOwn} authorName={item.authorName}>
      <MessageText>{item.msg}</MessageText>
    </Message>
    ));
    return (
    <ThemeProvider>
    <MessageList active style={{height: 570}}>
        {msgItems}
    </MessageList>
    </ThemeProvider>)
    
  };  
};

export default ChatRoomPaper;