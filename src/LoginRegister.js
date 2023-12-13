import React, {useState} from 'react';
import { Tabs } from 'antd';
import Login from './Login';
import Register from './Register';
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserShared2Fill } from "react-icons/ri";


const LoginRegister = ({}) => {
  const [loginregisterShow,setLoginRegisterShow]=useState(true);

  const UserPageOpen=()=>{
    setLoginRegisterShow(false);
  };

 


  return (
    <div>
   {   loginregisterShow &&  (   <Tabs defaultActiveKey="1">
  <Tabs.TabPane
    tab={<span>Login</span>}
    key="1"
    icon={<RiUserShared2Line />}
  >
    <Login UserPageOpen={UserPageOpen}/>
  </Tabs.TabPane>

  <Tabs.TabPane
    tab={<span>Register</span>}
    key="2"
    icon={<RiUserShared2Fill />}
  >
    <Register  UserPageOpen={UserPageOpen}/>
  </Tabs.TabPane>

</Tabs>)            }
   
   
     </div>
  


 
) };



export default LoginRegister;
