import React from 'react';
import {ThemeProvider, AgentBar, 
  Avatar, Column, Title, Subtitle }  from '@livechat/ui-kit';

class FriendTopBar extends React.Component {
  render(){
    return (
    <ThemeProvider>
      <AgentBar>
      <Avatar imgUrl="./assets/bot.png" />
      <Column>
        <Title>{'Chatbot'}</Title>
        <Subtitle>{'電機系畢業，一個厭世的聊天機器人'}</Subtitle>
      </Column>
    </AgentBar>
    </ThemeProvider>);
  }
}
export default FriendTopBar;