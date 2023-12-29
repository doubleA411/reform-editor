import { useState, useContext} from 'react'
import edit from "./assets/edit.png";
import link from "./assets/link.png";
// import { supabase } from './supabase';
import { FormDataContext, FormDataProvider } from "./FormDataContext";

// import { Link } from 'react-router-dom';


// const {
//   data: { user },
// } = await supabase.auth.getUser();



function FormData() {

   const { formData, isLoading, error } = useContext(FormDataContext);

   const [data , setData] = useState([])

   // const [ authUser, setUser ] = useState("");
   

//  useEffect(() => {
//   setData(formData)
//   //  console.log("New data from context:", formData);
//  }, [data]);


  return (
    <div className="flex flex-wrap gap-6">
      {formData &&
        formData.map((formDataObj) => (
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
      {!data && <p>No data</p>}
    </div>
  );
}

export default () => (
  <FormDataProvider>
   <FormData />
  </FormDataProvider>
);