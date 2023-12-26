import React from 'react'
import image from "./assets/image.jpeg";


function Login() {
  return (
    <div className=" flex">
      <div className=" flex-auto">
        <img src={image} alt="" srcset="" className="h-full w-[812px]" />
      </div>
      <div className=" flex-auto flex flex-col items-center justify-center gap-10 bg-black-100 h-screen w-[700px] text-slate-100">
        <h1 className="text-4xl">reform.</h1>
        <div className=" bg-white-200 text-black-100 w-fit py-4 px-6 rounded-xl shadow-md shadow-slate-600 cursor-pointer">
          Sign in with Google
        </div>
      </div>
    </div>
  );
}

export default Login