import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';





const formatter = (value) => <CountUp end={value} separator="," />;
const Statistics = () => { 

  const [users, setUsers] = useState([]); 
 const [totalDonation, setTotalDonation] = useState(0);
 const [donorsNumber, setDonorsNumbers] = useState(0);
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


  useEffect(() => {
    // users state'i değiştiğinde çalışacak useEffect
    const total = users.reduce((acc, user) => {
      const userTotal = user.donations.reduce((donationAcc, donation) => donationAcc + donation, 0);
      return acc + userTotal;
    }, 0);

    setTotalDonation(total);
    setDonorsNumbers(users.length);
  }, [users]);


  return( 
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Total Donors" value={donorsNumber} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Donation Summary (₺)" value={totalDonation} precision={2} formatter={formatter} />
    </Col>
  </Row>
  
  )
 
  };
export default Statistics;