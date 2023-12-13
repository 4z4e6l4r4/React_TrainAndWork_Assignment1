import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import LoginRegister from './LoginRegister';

const UserIcon = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
      <i></i>
      </Button>

      <Modal
        title="Welcome"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginRegister />
      </Modal>
    </div>
  );
};

export default UserIcon;
