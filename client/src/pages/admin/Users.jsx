import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/userinfo`);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="overflow-x-auto p-10">
      <h1 className="font-bold text-3xl mb-5">Users</h1>
      <div className="border p-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
