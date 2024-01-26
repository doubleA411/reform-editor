
import FormData from './FormData';
import {motion} from 'framer-motion'
import { useNavigate } from "react-router";
import { useEffect } from 'react';



function MyForms() {

  useEffect(() => {
    console.log("reload")
  })


  // refresh
  // navigate(0);
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" flex flex-col "
      >
        <p className=' absolute bottom-0 left-0 m-4 text-sm'>Reload the page if form is missing</p>
        <div className="h-[1px] bg-black-100 mt-2"></div>
        <div className="flex flex-wrap gap-10 m-10">
          <FormData />
        </div>
      </motion.div>
    </>
  );
}

export default MyForms