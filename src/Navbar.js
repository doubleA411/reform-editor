import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { supabase } from './supabase';
// import { FormDataProvider, FormDataContext } from "./FormDataContext";






function Navbar() {

const [userData, setUser] = useState({});  

const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  setUser(user);

}

useEffect(() => {
  getUser();
},[userData])

const [showDropdown, setShowDropdown] = useState(false);

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log("Error occured: ", error);
  }
}



const toggleDropdown = () => {
  setShowDropdown((prev) => !prev);
};

const handleSignOut = async () => {
  await signOut();
  // Additional logic after sign-out if needed
};



  return (
    <div className=" flex items-center justify-between py-5 mx-10">
      <p className="text-3xl cursor-pointer">reform.</p>
      <div className=" flex gap-16 bg-white-200 h-fit w-fit px-8 py-6 rounded-3xl">
        <Link to={"/"}>
          <p className=" cursor-pointer">Home</p>
        </Link>
        <Link to={"/myforms"}>
          <p className=" cursor-pointer">My Forms</p>
        </Link>
        <p onClick={toggleDropdown} className=' cursor-pointer'>{userData && userData.email}</p>
        {showDropdown && (
          <div className=" z-20 absolute top-10 right-0 bg-white-100 border rounded-md shadow-lg m-10">
            <p
              className="py-2 px-4 cursor-pointer hover:bg-gray-200"
              onClick={handleSignOut}
            >
              Sign Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;