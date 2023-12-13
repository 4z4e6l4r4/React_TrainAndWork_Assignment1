import React from "react";
import { Anchor, Col, Row } from "antd";
import LoginRegister from "./LoginRegister";
import Statistics from "./Statistics";
import { Layout } from "antd";
import Cart from "./Cart";
import DonateCards from "./DonateCards";
import RateTable from './RateTable';
import { RiHome3Line } from 'react-icons/ri';
import CardMainModul from './CardMainModul';
import main from './assets/images/main.jpg';
import flags from './assets/images/flags.jpg';
import PageFloatButton from "./FloatButton";



const { Footer } = Layout;

const HomeDesign = () => (
  <Row>
    <Col span={24}>
    <div style={{
          height: "1000px",
          backgroundSize: 'cover',

          background: `url(${main})`,
        }}>
          
<DonateCards/>
<DonateCards/>

      </div>

      {/* <div
        id="part-1"
        style={{
          height: "150vh",
          background: `url(${main})`,
          backgroundSize: 'cover',
          opacity: 0.8,
        }}
      /> */}
 
      <div/>


      {/* <div
        id="part-2"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",

          background: "rgba(0,255,0,0.02)",
          background: `url(${flags})`,
          backgroundSize: 'cover',
          opacity: 0.8,

        }}
      /> */}
  
     
     
    </Col>

    
    <Col span={0}>
 
   
      <Anchor
      
        replace
        items={[
          {
            key: "part-1",
            href: "#part-1",
            title: "Home",
            icon: <RiHome3Line/>,
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Library",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Donor Table",
          },
        ]}
      />



    </Col>

    {/* --------------- FOOTER --------------- */}
    <Col span={24}>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
         <RateTable/>
        <Statistics />
        <div>

        </div>
      </Footer>
    </Col>
    <PageFloatButton />

  </Row>
);
export default HomeDesign;
