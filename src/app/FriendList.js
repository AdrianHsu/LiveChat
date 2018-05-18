import React from 'react';
import {ThemeProvider, ChatList, ChatListItem, Avatar,
    Column, Row, Title, Subtitle} from '@livechat/ui-kit';


class FriendList extends React.Component {

  render() {
    return (
      <ThemeProvider>
      <ChatList>
      <ChatListItem active>
        <Avatar imgUrl="./assets/bot.png" />
        <Column fill>
          <Row justify>
            <Title ellipsis>{'Chatbot'}</Title>
            <Subtitle nowrap>{'14:31 PM'}</Subtitle>
          </Row>
          <Subtitle ellipsis>
            {"干我屁事"}
          </Subtitle>
        </Column>
      </ChatListItem>
    </ChatList>
    </ThemeProvider>
     )};
};

export default FriendList;