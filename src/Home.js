import React, { useContext ,useEffect, useState } from 'react'
import CreateBtn from './CreateBtn';
import img from './assets/mm.png';
import logo from "./assets/reform-logo@4x.png";
import me from './assets/me.png'
import {motion} from 'framer-motion'

import { FormDataContext } from './FormDataContext';

function Home() {
  const [form,setForm] = useState(0);
  const formData = useContext(FormDataContext);

  useEffect(() => {
    setForm(formData.length)
  },[formData])
  

  return (
    <motion.div
    exit={{opacity: 0}}
    initial={{opacity:0}}
    animate={{opacity:1}}
     className=" flex flex-col">
      {/* create btn */}
      <CreateBtn />

      {/* create btn */}

      <div className=" flex flex-col mx-10 mb-10 bg-black gap-3 p-3  rounded-xl ">
        <div className=" flex-1/4 flex gap-3 ">
          <div className="flex flex-col gap-6 items-center bg-white-100 w-fit p-10 rounded-md text-2xl">
            <p>Forms Created</p>
            <p className=" text-[64px] font-bold">{form}</p>
          </div>
          <div className="flex-1 flex items-center justify-center rounded-md bg-white-100 w-full py-10 px-20">
            <p className=" text-[64px]">
              <i>make your (g)form better</i>
            </p>
          </div>
        </div>
        <div className=" flex gap-3">
          <div className=" flex h-[300px] bg-white-100 w-fit rounded-md px-10">
            <img src={logo} alt="" className=" scale-75 w-[300px] " />
          </div>
          <div className=" flex  bg-white-100 w-fit p-20 rounded-md text-2xl h-[300px] ">
            <img src={me} alt="" className=" scale-125 w-[250px]" />
          </div>
          <div className=" flex-auto flex items-center bg-white-100 w-full p-10 rounded-md text-4xl">
            Hey there, welcome aboard! Get ready to dive into something awesome
          </div>
        </div>
        {/* <div className=" flex-auto bg-white-100 w-full p-24 rounded-md text-2xl"></div> */}

        <div className=" flex-auto bg-white-100 w-full h-fit rounded-md text-2xl">
          <marquee
            // duplicated='true'
            className=" overflow-hidden"
            width="100%"
            behavior="scroll"
            scrollamount="20"
            direction="right"
            loop="10"
          >
            <div className=" flex items-center">
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
              <img src={img} alt="" className=" scale-50" />
              <p>Only text fields are supported</p>
            </div>
          </marquee>
        </div>
      </div>
    </motion.div>
  );
}

export default Home