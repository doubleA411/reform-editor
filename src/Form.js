import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase";

// {id : form_id, color : color, bgcolor : bgcolor, size : size, title : title, entries : [{},{}...]}

 function Form() {

  const [form, setForm] = useState({});

// const form = localStorage.getItem("formData")
// console.log(form);

const { id } = useParams();

const fetchData = async () => {
  try {
    const { data, error } = await supabase
      .from("publicform")
      .select()
      .eq("form_id", id);

    if (error) {
      console.error("Error fetching data:", error.message);
      return;
    }

    console.log(data); // Verify data received

    if (data && data.length > 0) {
      
      setForm(
        data[0],
      );
    }
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
};

useEffect(() => {
  fetchData()
},[id])

// const { formData, isLoading, error } = useContext(FormDataContext);

// const handleFilter = (formId) => {
//   return formId === id;
// };
// const data = formData.filter((d) => handleFilter(d.form_id));


// const formSettings = JSON.parse(localStorage.getItem(id));

  useEffect(() => {
    const formElement = document.getElementById("form");
    formElement.style.width = form.size + "px";
  }, [form.size]);


  return (
    <div className={` flex items-center justify-center min-h-screen  ${form.bgcolor}`}>
      <div
        id="form"
        className={` flex flex-col gap-6 ${
          form.color
        }  text-black-100 p-16 border-2 rounded-xl w-[${form.size + "px"}]`}
      >
        <p className="flex items-center justify-center font-semibold text-2xl">
          {form.title}
        </p>
        <form
          className=" flex flex-col gap-3 items-center justify-center w-full"
          action={form.action_url}
        >
          {form.entries && form.entries.map((d) => (
            <div key={d.entry_id} className=" flex flex-col w-full">
              <p>{d.entry_name}</p>
              <div className=" w-full">
                <input
                  name={d.entry_id}
                  type="text"
                  className="outline-none p-3 rounded-md mt-2 w-full "
                />
              </div>
            </div>
          )) 
          }
          <div className=" flex bg-black-100 px-5 py-2 rounded-lg items-center mt-3 justify-center text-white-200">
            <input type="submit" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default Form;