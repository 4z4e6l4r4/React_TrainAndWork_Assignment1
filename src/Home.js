import React, { useState } from 'react';

import { Layout, Menu, Button, theme } from 'antd';
import HomeDesign from './HomeDesign';
import { TbGardenCart } from "react-icons/tb";
import { RiBookOpenFill, RiHome3Line } from 'react-icons/ri';
import LoginRegister from './LoginRegister';
import { Modal } from 'antd';
import { FaUserAstronaut } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import CardMainModul from './CardMainModul';


const { Header, Sider } = Layout;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const showCardModal = () => {
    setIsCardModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  
  
  
  return (
    <Layout>
      
      <Sider 
      style={{
        opacity: "0.9",

      }}
      >
        <div className="demo-logo-vertical" />
        <Modal title="Wellcome" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}
         okButtonProps={{ style: { display: 'none' } }} 
         cancelButtonProps={{ style: { display: 'none' } }}>

          
        <LoginRegister/>
      </Modal>

      <Modal title="Did you decide to donate?" visible={isCardModalOpen} onOk={handleOk} onCancel={handleCancel}
         okButtonProps={{ style: { display: 'none' } }} 
         cancelButtonProps={{ style: { display: 'none' } }}
         >

<CardMainModul/>

          
      </Modal >

        <Menu
        
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {   
              key: '1',
              icon: <FaUserAstronaut onClick={showModal} 
              style={{width:"100%"}}/>,
              
            },
            {
              key: '2',
              icon: <RiHome3Line style={{width:"100%"}} onClick={showModal}/>,
              
            },
            {
              key: '3',
              icon: <RiBookOpenFill style={{width:"100%"}}/>,              
            },
            {
              key: '4',
              icon: <TbGardenCart style={{width:"100%"}}  onClick={showCardModal}/>,            
            }
          ]}
        />
      </Sider>
      <Layout>

        <Header
           style={{

            padding: '0 20px ',
            background: colorBgContainer,
            opacity: 0.9,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >

<h1
 style={{
  margin: '15',
  padding: '400px',
  fontFamily: 'Georgia, Roboto',
  color: '#880000',
  textAlign: 'center', 
  alignItems: 'center', 
  fontSize:'25px',

}}
>Everything For Free Palestine</h1>

          <Button
            type="text"
            icon={ <FaHandsHelping /> }
            style={{
              fontSize: '28px',
              width: 64,
              height: 64,
              marginLeft:'16px',
            }}
          />
        </Header>

<HomeDesign/>



      </Layout>
      
    </Layout>
  );
};
export default Home;