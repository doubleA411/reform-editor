import { createContext, useState, useEffect } from "react";
import { supabase } from "./supabase";

export const FormDataContext = createContext();

const {
  data: { user },
} = await supabase.auth.getUser();


export const FormDataProvider = ({ children}) => {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

 const fetchData = async () => {
   try {
     const data = await fetchFormData(user.id);
     setFormData(data);
     localStorage.setItem("formData", JSON.stringify(data)); // Store data in local storage
   } catch (error) {
     setError(error); 
     console.error("Error fetching data:", error);
   } finally {
     setIsLoading(false);
   }
 };
    useEffect(() => {
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        setFormData(JSON.parse(storedFormData));
        setIsLoading(false);
      } else {
        fetchData();
      }
    },[]);

   

  useEffect(()=> {
    fetchData()
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId)
  },[])

  
  return (
    <FormDataContext.Provider value={{ formData, isLoading, error }}>
      {isLoading ? (
        <div>Loading form data...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        children
      )}
    </FormDataContext.Provider>
  );
};

const fetchFormData = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("formdata")
      .select()
      .eq("uid", userId);

    if (error) {
      console.error("Error occurred:", error);
      // Return empty array in case of an error
      return [];
    }

    // Check if data is available
    if (data && data.length > 0) {
      // console.log("Data retrieved:", data);
      const acc = {};
      data.reduce((acc, item) => {
        acc[item.form_id] = acc[item.form_id] || {
          title: item.title,
          form_id: item.form_id,
          uid: item.uid,
          action_url: item.action_url,
          entries: [],
        };
        acc[item.form_id].entries.push({
          entry_name: item.entry_name,
          entry_id: item.entry_id,
        });
        return acc;
      }, acc);
    //   console.log(acc)
      return Object.values(acc);
    } else {
      console.log("No data found.");
      return [];
    }
  } catch (error) {
    console.error("Unexpected error:", error.message);
    // Return empty array in case of an unexpected error
    return [];
  }
};
