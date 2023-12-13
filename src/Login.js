import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { InfoCircleOutlined, UnlockOutlined } from "@ant-design/icons";

import { Input,Tooltip } from "antd";
import { Col, Row } from 'antd';

import { Button } from "antd";

const Login = ({UserPageOpen}) => {
  const [users, setUsers] = useState([]);  
  const [newLoginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const canLogin = () => {
    let foundUser = null;

    console.log("Login Successful", newLoginUser);
    foundUser = checkLoginUser();
    if (foundUser) {
      console.log('Kullanıcı bulundu:', foundUser);
      UserPageOpen();
    } else {
      console.log('Kullanıcı bulunamadı.');
    
    };
  };


  const checkLoginUser = () => {
    let foundUser = null;

    users.forEach(user => {
      if (user.email === newLoginUser.email && user.password === newLoginUser.password) {
        foundUser = user;
      }
    });
  
    return foundUser;
  };
    
  
  

  useEffect(() => {
    fetch('http://localhost:3000/users') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
  <Row >
    <Col span={10}>
    <div>
      <h3>Login</h3>

      <Input
        type="email"
        value={newLoginUser.email}
        onChange={(e) => setLoginUser({...newLoginUser, email: e.target.value})}
        size="large"
        placeholder=" Enter your Email"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Please Enter Formel Mail Adress">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <br />
      <br />
      <Input.Password
      size="large"
      prefix={<UnlockOutlined className="site-form-item-icon" />}
        placeholder=" Enter your password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        type="password"
        value={newLoginUser.password}
        onChange={(e) => setLoginUser({...newLoginUser, password: e.target.value})}
      />
      <br />
      <br />
      <Button type="default" wrap="wrap" onClick={canLogin}>
        {" "}
        Login
      </Button>
    </div>
    </Col>
  </Row>
  );
};

export default Login;
