import React from 'react'
import { Link } from 'react-router-dom';

function CreateBtn() {
  return (
    <Link to={"/createForm"}>
      <div className=" absolute bottom-0 right-0 my-16 mx-5 bg-white-200 p-3 rounded-xl cursor-pointer ">
        Create new form <span className="text-xl">+</span>
      </div>
    </Link>
  );
}

export default CreateBtn