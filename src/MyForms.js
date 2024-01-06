
import FormData from './FormData';
import {motion} from 'framer-motion'

function MyForms() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" flex flex-col "
      >
        <div className="h-[1px] bg-black-100 mt-2"></div>
        <div className="flex flex-wrap gap-10 m-10">
          <FormData />
        </div>
      </motion.div>
    </>
  );
}

export default MyForms