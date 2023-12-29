import React from 'react'
import { Link } from 'react-router-dom';
import { supabase } from './App';

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if(error) {
    console.log("Error occured: ",error)
  }
}

function Navbar() {
  return (
    <div className=" flex items-center justify-between py-5 mx-10">
      <p className="text-3xl cursor-pointer">reform.</p>
      <div className=" flex gap-16 bg-white-200 h-fit w-fit px-8 py-6 rounded-3xl">
        <Link to={'/'}>
        <p className=" cursor-pointer">Home</p>
        </Link>
        <Link to={'/myforms'}>
        <p className=" cursor-pointer">My Forms</p>
        </Link>
      </div>
      <div onClick={() => signOut()} className=" flex items-center justify-center w-20 h-12 rounded-2xl bg-white-200 px-1  cursor-pointer">
       <p>Sign out</p>
      </div>
    </div>
  );
}

export default Navbar