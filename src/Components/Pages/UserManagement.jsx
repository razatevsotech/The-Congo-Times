import React, { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "Super Admin",
    status: "Active",
    lastLogin: "Just now",
    avatar: "A",
  },
  {
    id: 2,
    name: "Editor One",
    email: "editor@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "Yesterday",
    avatar: "E",
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);

  const handleInvite = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "Never",
      avatar: "N",
    };

    setUsers((prev) => [...prev, newUser]);
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new user name:");

    if (!newName) return;

    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, name: newName, avatar: newName[0] } : user
      )
    );
  };

  const handleRemove = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-3 py-2 font-sans text-[#111827]">
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h1 className="text-[17px] font-semibold leading-none">
            User Management
          </h1>
          <p className="mt-2 text-[11px] text-[#6b7280]">
            Manage admin and editor accounts.
          </p>
        </div>

        <button
          onClick={handleInvite}
          className="h-[34px] rounded-[5px] bg-[#ef476f] px-4 text-[12px] font-semibold text-white hover:bg-[#df3b62]"
        >
          + Invite User
        </button>
      </div>

      <div className="overflow-hidden rounded-[6px] border border-[#d8dee8] bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[38px] bg-[#f8fafc] text-left text-[9px] uppercase tracking-wide text-[#475569]">
              <th className="w-[230px] px-5">User</th>
              <th className="w-[260px] px-5">Email</th>
              <th className="w-[180px] px-5">Role</th>
              <th className="w-[130px] px-5">Status</th>
              <th className="w-[150px] px-5">Last Login</th>
              <th className="px-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="h-[49px] border-t border-[#d8dee8] text-[11px]"
              >
                <td className="px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gradient-to-br from-[#c23b6c] to-[#26306f] text-[11px] font-semibold text-white">
                      {user.avatar}
                    </div>
                    <span className="text-[#334155]">{user.name}</span>
                  </div>
                </td>

                <td className="px-5 text-[#334155]">{user.email}</td>

                <td className="px-5">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                      user.role === "Super Admin"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-medium text-green-700">
                    {user.status}
                  </span>
                </td>

                <td className="px-5 text-[#334155]">{user.lastLogin}</td>

                <td className="px-5">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="h-[25px] rounded-[5px] border border-[#cbd5e1] bg-white px-3 text-[10px] text-[#334155] hover:bg-gray-50"
                    >
                      Edit
                    </button>

                    {user.role !== "Super Admin" && (
                      <button
                        onClick={() => handleRemove(user.id)}
                        className="h-[25px] rounded-[5px] border border-red-300 bg-red-50 px-3 text-[10px] text-red-500 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}