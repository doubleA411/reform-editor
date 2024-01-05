import { useContext, useEffect, useState} from 'react'
import edit from "./assets/edit.png";
import link from "./assets/link.png";
// import { supabase } from './supabase';
import { FormDataContext } from "./FormDataContext";


function FormData() {

   const formData = useContext(FormDataContext);
  const [data, setData] = useState();
useEffect(() => {
  if (formData.length > 0) {
    setData(formData);
  }
}, [formData]);
  //  console.log(formData)

  return (
    <div className="flex flex-wrap gap-6">
      {data &&
        data.map((formDataObj) => (
          <div
            key={formDataObj.form_id}
            className="flex items-center justify-center w-fit gap-20 bg-white-200 px-7 py-7 rounded-3xl"
          >
            <p className="text-3xl font-light">{formDataObj.title}</p>
            <div className="flex gap-3">
              <a
                href={`/editor?id=${formDataObj.form_id}`}
              >
                <img src={edit} alt="" className="h-[20px]" />
              </a>
              <img src={link} alt="" className="h-[20px]" />
            </div>
          </div>
        ))}
      {!data && <p>Loading Data.....</p>}
    </div>
  );
}

export default FormData