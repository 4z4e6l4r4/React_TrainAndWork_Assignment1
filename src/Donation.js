import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import CardInputs from "./CardInputs";
import { Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState("rmb");
  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || "0", 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!("number" in value)) {
      setNumber(newNumber);
    }
    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />
    </span>
  );
};

const Donation = () => {
  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Price must be greater than zero!"));
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <br />


      <Form.Item
       wrapperCol={{
        offset: 0,
      }}
        name={["user", "password"]}
        rules={[
          {
            required: true,
            type: "password",
          },
        ]}
      >
        <Input         placeholder= 'Card Number'
/>
      </Form.Item>

      <Form.Item {...layout}
       wrapperCol={{
        offset: 0,
      }}
      >
        <CardInputs {...layout} />
      </Form.Item>

      <Form.Item {...layout}
       wrapperCol={{
        offset: 6,
      }}>
        <Checkbox {...layout}
        >I want to donate regularly</Checkbox>
      </Form.Item>

      <Form
        {...layout}
        
        style={{
          maxWidth: 600,
        }}
        name="customized_form_controls"
        onFinish={onFinish}
      >
        <Form.Item
          wrapperCol={{
            offset: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};

// Kart Number Inputs

export default Donation;
