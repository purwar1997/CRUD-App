import { useState, useEffect } from 'react';
import Axios from 'axios';

const UserList = function () {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    Axios.get('/getUsers')
      .then(res => {
        setUserData(res.data.users);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [userData]);

  const editData = user => {
    const updateData = data => {
      Axios.put(`/updateUser/${user._id}`, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message));
    };

    const whatToEdit = prompt('Do you want to edit username, email or both ?');

    if (whatToEdit === 'username') {
      const userName = prompt('Enter your new username');

      if (!userName) {
        alert('Please enter your username');
      } else {
        user.username = userName;
        updateData(user);
      }
    } else if (whatToEdit === 'email') {
      const email = prompt('Enter your new email');

      if (!email) {
        alert('Please enter your email');
      } else {
        user.email = email;
        updateData(user);
      }
    } else if (whatToEdit === 'both') {
      const userName = prompt('Enter your new username');
      const email = prompt('Enter your new email');

      if (!userName || !email) {
        alert('Please enter both username and email');
      } else {
        user.username = userName;
        user.email = email;
        updateData(user);
      }
    } else {
      alert('Enter either username, email or both');
    }
  };

  const deleteData = userId => {
    const userAgrees = window.confirm('This user will be deleted. Do you want to proceed futher ?');

    if (userAgrees) {
      Axios.delete(`/deleteUser/${userId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message));
    }
  };

  return (
    <div className="my-12">
      <h1 className="mb-12 text-4xl font-semibold text-center">All Users</h1>

      <table className="m-auto w-3/5 border">
        <thead>
          <tr className="bg-[#F4F4F8] border">
            <th className="px-5 py-2.5 text-left font-semibold">Username</th>
            <th className="px-5 py-2.5 text-left font-semibold">Email</th>
            <th className="px-5 py-2.5 text-left font-semibold">Edit</th>
            <th className="px-5 py-2.5 text-left font-semibold">Delete</th>
          </tr>
        </thead>

        <tbody>
          {userData &&
            userData.map(user => {
              return (
                <tr className="border">
                  <td className="px-5 py-2.5">{user.username}</td>
                  <td className="px-5 py-2.5">{user.email}</td>
                  <td className="px-5 py-2.5">
                    <button className="hover:text-green-500" onClick={() => editData(user)}>
                      Edit
                    </button>
                  </td>
                  <td className="px-5 py-2.5">
                    <button className="hover:text-red-500" onClick={() => deleteData(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
