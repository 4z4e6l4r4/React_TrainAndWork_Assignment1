import React, { useState, useEffect } from "react";
import { Input, Tooltip } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { InfoCircleOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Col, Row } from "antd";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const Register = ({  UserPageOpen }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    donations: [],
  });

  const canRegister = () => {
    console.log("Successful Registration", newUser);
    handleAddUser();
   
  };

  const handleAddUser = () => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        const highestId = Math.max(...users.map((user) => user.id), 0);
  
        const newUserWithId = {
          id: highestId + 1,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          donations: newUser.donations,
        };
  
        return fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUserWithId),
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
        
        return fetch('http://localhost:3000/users');
      })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        UserPageOpen();
  console.log(data);
       
        setNewUser({
          name: '',
          email: '',
          password: '',
          donations: [],
        });
      })
      .catch((error) => console.error('Error adding user:', error));
  };
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData();
  }, []);

  return (
    <Row>
      <Col span={10}>
        <div>
          <h3>Register</h3>

          <Input
          
            type="name"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            size="large"
            placeholder=" Enter your Name"
            prefix={
              <MdOutlineDriveFileRenameOutline className="site-form-item-icon" />
            }
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <br />
          <br />

          <Input
     
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            size="large"
            placeholder=" Enter your Email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            rules={[
              {
                  required: true,
      
                type: 'email',
              },
            ]}
          />
          <br />

          <br />
          <Input.Password
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            size="large"
            prefix={<UnlockOutlined className="site-form-item-icon" />}
            placeholder=" Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <br />

          <br />
          <Button type="default" wrap="wrap" onClick={canRegister}>
            {" "}
            Sign Up
          </Button>
        </div>
      </Col>
    </Row>
  );
};
export default Register;
