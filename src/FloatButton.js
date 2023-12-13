import React from 'react';
import { FloatButton } from 'antd';
import { MdQuestionMark } from "react-icons/md";
import { LiaComment } from "react-icons/lia";

const PageFloatButton = () => (
  <>
 <FloatButton.Group
      trigger="click"
      type="success"
      style={{
        right: 24,
      }}
      icon={<MdQuestionMark  />}
    >

      <FloatButton />
      <FloatButton icon={<LiaComment />} />
    </FloatButton.Group>
    
  </>
);
export default PageFloatButton;