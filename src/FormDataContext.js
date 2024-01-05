import { createContext, useState, useEffect } from "react";
import { supabase } from "./supabase"; // 

const FormDataContext = createContext();
const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);
const [userData, setUser] = useState({});



useEffect(() => {
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user.id);
    setUser(user);
  };

  getUser();
}, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("formdata").select().eq('uid',userData.id);
        if (data) {
          // console.log(data)
          setFormData(data);
        }
        if (error) {
          console.error("Error occured: ", error.message)
        }
      } catch (error) {
          console.error("Error occured in catch : ", error.message);
      }
    }
    fetchData();
  }, [userData]);

  return (
    <FormDataContext.Provider value={formData}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
