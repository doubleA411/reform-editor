import { useContext, useEffect } from "react";
import { FormDataContext, FormDataProvider } from "./FormDataContext";





function Preview() {

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

const { formData, isLoading, error } = useContext(FormDataContext);

const handleFilter = (formId) => {
  return formId === id;
};
const data = formData.filter((d) => handleFilter(d.form_id));


const formSettings = JSON.parse(localStorage.getItem(id));

  useEffect(() => {
    const formElement = document.getElementById("form");
    formElement.style.width = formSettings.size + "px";
  }, [formSettings]);


  return (
    <div className={` flex items-center justify-center min-h-screen  ${formSettings.bgcolor}`}>
      <div
        id="form"
        className={` flex flex-col gap-6 ${
          formSettings.color
        }  text-black-100 p-16 border-2 rounded-xl w-[${formSettings.size + "px"}]`}
      >
        <p className="flex items-center justify-center font-semibold text-2xl">
          {data[0].title}
        </p>

        <form
          className=" flex flex-col gap-3 items-center justify-center w-full"
          action={data[0].action_url}
        >
          {data[0].entries.map((d) => (
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
          ))}
          <div className=" flex bg-black-100 px-5 py-2 rounded-lg items-center mt-3 justify-center text-white-200">
            <input type="submit" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default () => (
  <FormDataProvider>
    <Preview />
  </FormDataProvider>
);