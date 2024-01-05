import React, { useEffect, useState } from 'react'
import { preprocess } from './test';
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'
// import { useUser } from './UserProvider';




// Check if a user is logged in
const { data : { user } } = await supabase.auth.getUser();


// const form = "

// https://docs.google.com/forms/d/e/1FAIpQLSe6QkinSfvuI6P5Dg-L-J9uAAEeL9AMV2uBQViT0H3nuntF-Q/viewform?usp=pp_url&entry.469246373=Name&entry.1403942219=Unique+ID&entry.829537125=Email+ID&entry.1178935119=Phone+number";

function AddForm() {

  
function isPrefilledGoogleFormLink(link) {
  const pattern =
    /^https:\/\/docs\.google\.com\/forms\/d\/e\/[\w-]+\/viewform\?usp=pp_url/;

  console.log(pattern.test(link));
  return pattern.test(link);
}




  const navigate = useNavigate();
  // const authUser = useUser();
  const [ url, setUrl] = useState("")
  const [ title, setTitle] = useState("")
  const [currUser, setCurrUser] = useState("");
  const [err, setErr] = useState("")
  useEffect(()=> {
    // console.log(authUser)
    if(user) {
      setCurrUser(user.id)
    }
  },[])

   function clearErrorAfterDelay() {
     setTimeout(() => {
       setErr("");
     }, 5000);
   }

  useEffect(() => {
    if(err.length > 0) {
      clearErrorAfterDelay();
    }
  },[err])


  const addData = async (url) => {
    const formData = await  preprocess(url);
    const { data, error } = await supabase.from("formdata").insert([
      {
        form_id: formData.id,
        url: url,
        action_url: formData.url,
        entries: formData.entries,
        title: title,
        uid: currUser,
      },
    ]);
    if (error) {
      console.log(error);
    }
    console.log(data, "Success");
  };


    return (
      <div className=" p-20 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 h-fit items-center justify-center bg-black-100 rounded-xl border-2 border-white-100">
        <input
          type="text"
          placeholder="Title"
          className=" w-[360px] outline-none p-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="form url"
          className=" w-[360px] outline-none p-2 rounded-lg"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="submit"
          value={"Submit"}
          className=" bg-white-100 cursor-pointer p-2 rounded-lg"
          onClick={() => addData(url)}

        />
        <p className={`${err.length > 0 ? "block" : "hidden"} text-rose-600`}>
          {err}
        </p>
      </div>
    );
  };

export default AddForm;