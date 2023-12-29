import React from 'react'
import { useState, useEffect, useContext } from "react";

import { FormDataContext, FormDataProvider } from "./FormDataContext";

function Editor() {

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');
// console.log(id)

const { formData, isLoading, error } = useContext(FormDataContext);
// const [color, setColor] = useState('bg-yellow');
// const [size, setSize] = useState(390)
const [form, setForm] = useState({
  color: "bg-yellow",
  size: 390,
  bgcolor: "bg-black",
});

const handleForm = (e) => {
  setForm({
        ...form,
        [e.target.name] : e.target.value
  })
}


  //  const data = localStorage.getItem("formdata");

const handleFilter = (formId) => {
      return formId === id
  } 
const data = formData.filter((d) => handleFilter(d.form_id))

  // console.log(data)

//  const data = formData.find(
//    ([form_id]) => form_id === id
//  );
 
  useEffect(() => {
    const formElement = document.getElementById("form");
    formElement.style.width = form.size + "px";
  }, [form]);


  const colors = ['bg-red','bg-cyan','bg-yellow','bg-barbie','bg-slate-200', 'backdrop-blur-md']
  const bg = [
    "bg-black",
    'bg-blue',
    'bg-redish',
    'bg-purple',
    'bg-violet'
  ];
  return (
    <div className=" flex flex-col">
      <div className=" h-[1px] bg-black-100 mt-2"> </div>
      <div className=" flex">
        {/* tools */}

        {/* title */}
        <div className=" w-1/4 flex flex-col items-start px-7 pt-10 gap-8">
          <div className=" w-full h-fit text-black-100 bg-white-200 p-5 rounded-xl text-lg">
            <input
            disabled
              type="text"
              placeholder="Title"
              className="w-full outline-none"
              value={data[0].title}
            />
          </div>
          {/* title */}

          {/* colors */}
          <div className=" w-full h-fit text-black-100 bg-white-200 p-3 rounded-xl ">
            <select
              name="color"
              id="color"
              className=" outline-none p-2 w-full"
              onChange={(e) => handleForm(e)}
              value={form.color}
            >
              {colors.map((c, idx) => (
                <option value={c}>Color {idx}</option>
              ))}
            </select>
          </div>
          {/* colors */}

          {/* size */}
          <div className="flex items-start w-full h-fit bg-white-200 p-3 rounded-xl">
            <select
              name="size"
              id="size"
              value={form.size}
              className=" outline-none p-2 w-full"
              onChange={(e) => handleForm(e)}
            >
              <option value={390}>Small</option>
              <option value={480}>Medium</option>
              <option value={560}>Large</option>
            </select>
            {/* <div className=" cursor-pointer " >SM</div>
            <div className=" cursor-pointer  ">MD</div>
            <div className=" cursor-pointer  ">LG</div> */}
          </div>

          <div className=" flex items-start w-full h-fit bg-white-200 p-3 rounded-xl">
            <select
              name="bgcolor"
              id="bgcolor"
              className=" outline-none p-2 w-full"
              onChange={(e) => handleForm(e)}
              value={form.bg}
            >
              {bg.map((c, idx) => (
                <option value={c}>
                  <p>Color {idx}</p>
                </option>
              ))}
            </select>
          </div>
          {/* size */}

          {/* opacity */}
          <div className="w-full h-fit text-black-100 bg-white-200 p-5 rounded-xl text-lg">
            {" "}
            <input
              title="Opacity"
              type="range"
              placeholder="Opacity"
              className="w-full outline-none accent-black-100"
            />
          </div>
          {/* opacity */}

          <div className=" flex justify-center w-full h-fit bg-black-100 text-slate-200 p-5 rounded-xl text-lg cursor-pointer">
            Save Draft
          </div>
        </div>
        {/* tools */}

        <div className=" w-[1px] min-h-screen bg-black-100"> </div>
        <div className=" w-3/4">
          <div
            className={` flex items-center justify-center h-[700px] ${form.bgcolor} border-2 m-10 rounded-xl`}
          >
            <div
              id="form"
              className={` flex flex-col gap-6 ${
                form.color
              }  text-black-100 p-16 border-2 rounded-xl w-[${
                form.size + "px"
              }]`}
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
              {/* <div>
                <p>Name</p>
                <div className="">
                  <input
                    type="text"
                    className="outline-none p-3 rounded-md mt-2 w-full "
                  />
                </div>
              </div> */}

              <div className=" absolute bottom-10 right-10 text-white-200 bg-black-100 py-3 px-10 rounded-xl cursor-pointer border-2  m-10">
                Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <FormDataProvider>
    <Editor />
  </FormDataProvider>
);