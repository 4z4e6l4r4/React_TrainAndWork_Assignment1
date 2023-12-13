import React from 'react';
import { Flex, Input } from 'antd';

const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const MessageUs = () => (
  <Flex vertical gap={32}>
   
    <TextArea
      showCount
      maxLength={200}
      onChange={onChange}
      placeholder="Your Message to Our Foundation"
      style={{
        height: 100,
        resize: 'none',
      }}
    />
  </Flex>
);

export default MessageUs;