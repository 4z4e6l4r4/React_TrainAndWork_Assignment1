import React, { useState } from "react";
import { Button, Form, Input, DatePicker, Select } from "antd";
import CardModul from "./CardModul";




const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

// const onFinish = (fieldsValue) => {
//   const values = {
//     ...fieldsValue,
//     "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
//   };
// };

const Cart = () => {

  const [newDonor, setDonor] = useState({
    email: "",
    donation: 0,
    name:""
  });




  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      
      style={{
        maxWidth: 600,
      }}
    >

<Form.Item>
        <h5>Everyting for Free Palestine</h5>
      </Form.Item>

      <Form.Item value="fullName" label="Full Name"
      
       rules={[
        {
          required: true,
        },
      ]}
      
      >
        <Input   onChange={(e) => setDonor({...newDonor, name: e.target.value})}
        />
      </Form.Item>
      
      <Form.Item value="email" label="Email"
       rules={[
        {
          required: true,
        },
      ]}>
        <Input
                onChange={(e) => setDonor({...newDonor, email: e.target.value})}

        />
      </Form.Item>

      <Form.Item value="large" label="Price"
      name="price"
      rules={[
        {
          required: true,
        },
        {
          type: "number",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (value > 0) {
              return Promise.resolve();
            }
            return Promise.reject(" ");
          },
        }),
      ]}
      >
        <Input type="number" 
                onChange={(e) => setDonor({...newDonor, donation: e.target.value})}

        />
      </Form.Item>

      <Form.Item value="large">
        <CardModul newDonor={newDonor}/>
      </Form.Item>
    </Form>
  );
};
export default Cart;
