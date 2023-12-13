import React, { useState ,useEffect} from 'react';
import { Button, Modal } from 'antd';
import Donation from './Donation';

const CardModul = ({newDonor}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData();
  }, []);
  const putDonation=()=>{

    fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((users) => {
      const highestId = Math.max(...users.map((user) => user.id), 0);

      const newDonorUser = {
        id: highestId + 1,
       
        name: newDonor.name,
        email: newDonor.email,
        donations: [parseInt(newDonor.donation)],
      };

      return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonorUser),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      else{
        console.log("Ekleme başarılı");

      }
      
    })

  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    putDonation();


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
        Payment
      </Button>
      <Modal title="Card Information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       okButtonProps={{ style: { display: 'none' } }} 
       cancelButtonProps={{ style: { display: 'none' } }} 
      >
       <Donation/>
      </Modal>
    </>
  );
};
export default CardModul;