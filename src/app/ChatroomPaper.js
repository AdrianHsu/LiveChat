import React from 'react';
import { ThemeProvider, MessageList, MessageGroup, Message,
     MessageText } from '@livechat/ui-kit';

class ChatroomPaper extends React.Component {
  render() {
    return (
    <ThemeProvider>
    <MessageList active>
      <MessageGroup>
        <Message date="21:38" authorName="Jon Smith">
          <MessageText>Hi! I would like to buy those shoes</MessageText>
        </Message>
      </MessageGroup>
      <MessageGroup onlyFirstWithMeta>
        <Message date="21:38" isOwn={true} authorName="Visitor">
          <MessageText>
            I love them
            so
            much!
          </MessageText>
        </Message>
        <Message date="21:38" isOwn={true} authorName="Visitor">
          <MessageText>This helps me a lot</MessageText>
        </Message>
      </MessageGroup>
    </MessageList>
    </ThemeProvider>);
    
  };
};

export default ChatroomPaper;