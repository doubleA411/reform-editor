import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" flex items-center justify-between py-5 mx-10">
      <p className="text-3xl cursor-pointer">reform.</p>
      <div className=" flex gap-16 bg-white-200 h-fit w-fit border-2 border-black-100 px-8 py-6 rounded-3xl">
        <Link to={'/'}>
        <p className=" cursor-pointer">Home</p>
        </Link>
        <Link to={'/editor'}>
        <p className=" cursor-pointer">Editor</p>
        </Link>
        <Link to={'/myforms'}>
        <p className=" cursor-pointer">My Forms</p>
        </Link>
      </div>
      <div className=" flex items-center justify-between w-20 h-12 rounded-2xl bg-white-200 px-1 border-2 border-black-100">
        <div className="w-9 h-9 rounded-xl bg-black-100"></div>
      </div>
    </div>
  );
}

export default Navbar