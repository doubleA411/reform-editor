import {useState, useRef,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Form from './Form';

function CreateBtn() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDialog();
      }
    };

     useEffect(() => {
       if (showModal) {
         document.addEventListener("mousedown", handleClickOutside);
        //  document.body.style.overflow = "hidden";
        //  document.body.style.filter = "blur(4px)";
       } else {
         document.removeEventListener("mousedown", handleClickOutside);
        //  document.body.style.overflow = "";
        //  document.body.style.filter = "";
       }
       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
        //  document.body.style.overflow = "";
        //  document.body.style.filter = "";
       };
     }, [showModal]);
  return (
    <div>
      <div
        onClick={openDialog}
        className=" z-10 absolute bottom-0 right-0 my-16 mx-5 bg-white-200 p-3 rounded-xl cursor-pointer "
      >
        Create new form <span className="text-xl">+</span>
      </div>

      {showModal && (
        <div ref={modalRef}>
          <Form />
        </div>
      )}
    </div>
  );
}

export default CreateBtn