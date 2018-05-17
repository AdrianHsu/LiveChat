import React from 'react';
import {ThemeProvider, TextComposer,
  Row, TextInput, SendButton}  from '@livechat/ui-kit';

class InputField extends React.Component {
  render(){
    return (
    <ThemeProvider>
    <TextComposer defaultValue="Hello, can you help me?">
      <Row align="center">
      <TextInput fill />
      <SendButton fit />
      </Row>
    </TextComposer>
    </ThemeProvider>);
  }
}
export default InputField;