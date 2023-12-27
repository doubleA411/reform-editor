import React from 'react'
import edit from './assets/edit.png';
import link from './assets/link.png';

function MyForms() {
  return (
    <div className=" flex flex-col ">
      
      <div className="h-[1px] bg-black-100 mt-2"></div>
      <div className="flex flex-wrap gap-10 m-10">
        <div className=" flex items-center justify-center w-fit gap-20 bg-white-200 px-7 py-7 rounded-3xl">
          <p className=" text-3xl font-light">Survey Form</p>
          <div className=' flex gap-3'>
            <img src={edit} alt="" className=" h-[20px]  " />
            <img src={link} alt="" className="h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyForms