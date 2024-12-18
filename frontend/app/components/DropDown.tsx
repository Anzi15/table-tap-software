"use client"
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import {auth} from "../../lib/firebase/config"

type AdminDropdownMenuProps = {
    userImg: string;
    name: string;
    email: string;
  };

const AdminDropdownMenu = ({ userImg, name, email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const indicateSignout = () => {
    toast("🦄 signed out successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        indicateSignout();
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };
  return (
    <div className="relative">
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={
          userImg.length
            ? userImg
            : "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
        }
        alt="User dropdown"
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="AdminDropdownMenu"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 fixed right-0"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{name}</div>
            <div className="font-medium truncate">{email}</div>
          </div>

          <div className="py-1">
            <button onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDropdownMenu;