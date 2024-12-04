import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`coffee-shop-server-three.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "This user has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto py-5 lg:py-10">
      <div className="text-2xl mb-5">Total user {users?.length}</div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>lastSignIn Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar border border-gray-300 rounded-xl p-1 pb-0">
                      <div className="h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="user imagea"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td>{user.lastSignInTime}</td>
                <th>
                  <button className="text-xl mr-2 lg:mr-5">
                    {" "}
                    <MdEdit />{" "}
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-xl text-red-500"
                  >
                    {" "}
                    <MdDelete />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
