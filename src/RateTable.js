import React, {useState} from "react";
import { useEffect } from 'react';

const RateTable = () => {
    const [users, setUsers] = useState([]);
    const [noNameUsers, setNoNameUsers] = useState([]);
      
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users data
        const usersResponse = await fetch('http://localhost:3000/users'); 
        const usersData = await usersResponse.json();
        console.log(usersData);
        setUsers(usersData);

        // Fetch nonameusers data
        const nonameUsersResponse = await fetch('http://localhost:3000/nonameusers'); // Adjust URL based on your server
        const nonameUsersData = await nonameUsersResponse.json();
        console.log(nonameUsersData);

        setNoNameUsers(nonameUsersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render
  

  return (
    <div className="col-14 " 
    style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: '50px'
    }}
    >
      <table class="table table-dark table-hover col-5"
       style={{
         
        borderRadius: '50px'
      }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Donation</th>
          </tr>
        </thead>

        <tbody>

            {users && (users.map((user, index) => (   <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.donations.reduce((total, donation) => total + donation, 0)}</td>          </tr>)
            ))     
            }
        </tbody>
      </table>
    </div>
  );
};
export default RateTable;
