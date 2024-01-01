import React from 'react'
import { useState, useEffect, useContext } from "react";
import { supabase } from './supabase';

import { FormDataContext, FormDataProvider } from "./FormDataContext";

function Editor() {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id");

  const { formData, isLoading, error } = useContext(FormDataContext);

  const handleFilter = (formId) => {
    return formId === id;
  };
  const data = formData.filter((d) => handleFilter(d.form_id));







  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const fetchPreview = async () => {
      const { data: checkData, error } = await supabase
        .from("publicform")
        .select("form_id")
        .eq("form_id", id);
      if (error) {
        throw error; // Handle any errors appropriately
      }
      setPreview(checkData.length > 0); // Set preview to true if data exists
    };

    fetchPreview();
  }, []); //

  useEffect(() => {
    console.log(preview);
  },[preview])






  const [form, setForm] = useState({
    color: "bg-yellow",
    size: 390,
    bgcolor: "bg-black",
    title: data[0].title,
    entries: data[0].entries,
    form_id: id,
    action_url: data[0].action_url,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDraft = async () => {
    const formSettings = localStorage.getItem(id);
    if (formSettings) {
      localStorage.removeItem(id);
      localStorage.setItem(id, JSON.stringify(form));
    } else {
      localStorage.setItem(id, JSON.stringify(form));
    }

    const { data: existingData, err } = await supabase
      .from("publicform")
      .select("form_id")
      .eq("form_id", id);

    if (err) {
      throw error;
    }

    if (existingData.length === 0) {
      const { res,  error } = await supabase
        .from("publicform")
        .insert([
          {
            color: form.color,
            size: form.size,
            bgcolor: form.bgcolor,
            title: data[0].title,
            entries: data[0].entries,
            form_id: id,
            action_url: data[0].action_url,
          },
        ])
        setPreview(true)
      if (res) {
        console.log(res);
      } else {
        console.log(error);
      }
    } else {
      const { data: updatedData, error: updateErr } = await supabase
        .from("publicform")
        .update([
          {
            color: form.color,
            size: form.size,
            bgcolor: form.bgcolor,
          },
        ])
        .eq("form_id", id)
        .select();
      if (updateErr) {
        throw updateErr;
      } else {
        console.log(updatedData);
      }
    }
  };

  const handleSettings = () => {
    const formSettings = localStorage.getItem(id);
    if (formSettings) {
      console.log(JSON.parse(formSettings));
      setForm(JSON.parse(formSettings));
      console.log(form);
    }
  };

  useEffect(() => {
    handleSettings();
  }, []);

  useEffect(() => {
    const formElement = document.getElementById("form");
    formElement.style.width = form.size + "px";
  }, [form]);

  const colors = [
    "bg-red",
    "bg-cyan",
    "bg-yellow",
    "bg-barbie",
    "bg-slate-200",
    "backdrop-blur-md",
  ];
  const bg = ["bg-black", "bg-blue", "bg-redish", "bg-purple", "bg-violet"];
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
              className="w-full outline-none disabled:bg-transparent"
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
                <option key={idx} value={c}>
                  Color {idx}
                </option>
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
          </div>
          {/* size */}

          {/* bgColor */}
          <div className=" flex items-start w-full h-fit bg-white-200 p-3 rounded-xl">
            <select
              name="bgcolor"
              id="bgcolor"
              className=" outline-none p-2 w-full"
              onChange={(e) => handleForm(e)}
              value={form.bgcolor}
            >
              {bg.map((c, idx) => (
                <option key={idx} value={c}>
                  Color {idx}
                </option>
              ))}
            </select>
          </div>
          {/* bgColor */}

          <div
            onClick={() => handleDraft()}
            className=" flex justify-center w-full h-fit bg-black-100 text-slate-200 p-5 rounded-xl text-lg cursor-pointer"
          >
            Save Draft
          </div>
        </div>
        {/* tools */}

        <div className=" w-[1px] min-h-screen bg-black-100"> </div>
        <div className=" w-3/4">
          <div
            id="formbg"
            className={` flex items-center justify-center h-[700px] ${form.bgcolor} border-2 m-10 rounded-xl relative`}
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

              { preview &&
                <a href={`/preview/${id}`}>
                  <div
                    className={` absolute bottom-5 right-5 text-white-200  py-3 px-10 backdrop-blur-xl rounded-xl cursor-pointer border-2 `}
                  >
                    Preview
                  </div>
                </a>
              }
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