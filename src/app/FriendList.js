import React from 'react';
import {ThemeProvider, ChatList, ChatListItem, Avatar,
    Column, Row, Title, Subtitle} from '@livechat/ui-kit';


class FriendList extends React.Component {

  render() {
    return (
      <ThemeProvider>
      <ChatList>
      <ChatListItem>
        <Avatar letter="K" />
        <Column fill>
          <Row justify>
            <Title ellipsis>{'Konrad'}</Title>
            <Subtitle nowrap>{'14:31 PM'}</Subtitle>
          </Row>
          <Subtitle ellipsis>
            {'Hello, how can I help you? We have a lot to talk about'}
          </Subtitle>
        </Column>
      </ChatListItem>
      <ChatListItem active>
        <Avatar letter="J" />
        <Column fill>
          <Row justify>
            <Title ellipsis>{'Andrew'}</Title>
            <Subtitle nowrap>{'14:31 PM'}</Subtitle>
          </Row>
          <Subtitle ellipsis>{'actually I just emailed you back'}</Subtitle>
        </Column>
      </ChatListItem>
      <ChatListItem>
        <Avatar imgUrl="./assets/ppl-3.jpg" />
        <Column fill>
          <Row justify>
            <Title ellipsis>{'Michael'}</Title>
            <Subtitle nowrap>{'14:31 PM'}</Subtitle>
          </Row>
          <Subtitle ellipsis>
            {"Ok, thanks for the details, I'll get back to you tomorrow."}
          </Subtitle>
        </Column>
      </ChatListItem>
    </ChatList>
    </ThemeProvider>
     )};
};

export default FriendList;