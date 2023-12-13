import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Cart from './Cart';


const CardMainModul = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <br/>
      <Button type="primary" onClick={showModal}>
        Donate
      </Button>
      <Modal title="Donor Informations" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      okButtonProps={{ style: { display: 'none' } }} 
      cancelButtonProps={{ style: { display: 'none' } }} 
      >
           <Cart />
      </Modal>
    </>
  );
};
export default CardMainModul;