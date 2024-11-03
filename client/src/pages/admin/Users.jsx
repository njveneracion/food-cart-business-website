import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiViewTable } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

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
    <section>
      <h1 className="font-bold text-3xl mb-5">Users</h1>
      <div className="border p-2">
        <table className="table table-sm table-auto">
          <thead>
            <tr className="bg-warning">
              <th>#</th>
              <th>Fullname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-info btn-sm mx-1 text-lg">
                    <CiViewTable />
                  </button>
                  <button className="btn btn-warning btn-sm mx-1 text-lg">
                    <FaEdit />
                  </button>
                  <button className="btn btn-error btn-sm mx-1 text-lg">
                    <RiDeleteBin5Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
