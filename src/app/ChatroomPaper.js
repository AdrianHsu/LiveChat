import React from 'react';
import { ThemeProvider, MessageList, MessageGroup, Message,
     MessageText } from '@livechat/ui-kit';

class ChatroomPaper extends React.Component {
  render() {
    return (
    <ThemeProvider>
    <MessageList active>
      <MessageGroup
        onlyFirstWithMeta
      >
        <Message avatarUrl='./assets/bot.png' date="21:38" authorName="Chatbot">
          <MessageText>干你屁事干你屁事干你屁事干你屁事干你屁事</MessageText>
        </Message>
        <Message avatarUrl='./assets/bot.png' date="21:38" authorName="Chatbot">
          <MessageText>干我屁事</MessageText>
        </Message>
      </MessageGroup>
      <MessageGroup onlyFirstWithMeta>
        <Message avatarUrl='./assets/me.png' date="21:38" isOwn={true} authorName="鈞">
          <MessageText>Test</MessageText>
        </Message>
        <Message avatarUrl='./assets/me.png' date="21:38" isOwn={true} authorName="鈞">
          <MessageText>This helps me a lot</MessageText>
        </Message>
      </MessageGroup>
      <MessageGroup onlyFirstWithMeta>
        <Message avatarUrl='./assets/bot.png' date="21:38" authorName="Chatbot">
          <MessageText>干你屁事</MessageText>
        </Message>
        <Message avatarUrl='./assets/bot.png' date="21:38" authorName="Chatbot">
          <MessageText>干我屁事</MessageText>
        </Message>
      </MessageGroup>
    </MessageList>
    </ThemeProvider>);
    
  };
};

export default ChatroomPaper;