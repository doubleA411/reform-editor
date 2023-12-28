import React, { useEffect, useState } from 'react'
import { preprocess } from './test';
// import { supabase } from './App'

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const sb_url = process.env.REACT_APP_SB_URL;
const sb_key = process.env.REACT_APP_SB_KEY;

export const supabase = createClient(sb_url, sb_key);


// Check if a user is logged in
const { data : { user } } = await supabase.auth.getUser();


const form = "https://docs.google.com/forms/d/e/1FAIpQLSe6QkinSfvuI6P5Dg-L-J9uAAEeL9AMV2uBQViT0H3nuntF-Q/viewform?usp=pp_url&entry.469246373=Name&entry.1403942219=Unique+ID&entry.829537125=Email+ID&entry.1178935119=Phone+number";
          
function Form() {

  const [ url, setUrl] = useState("")
  const [ title, setTitle] = useState("")
  const [currUser, setCurrUser] = useState("");
  const [userMail ,setUserMail] = useState("") 
  useEffect(()=> {
    if(user) {
      setCurrUser(user.id)
      setUserMail(user.email)
    }
  },[])
    return (
      <div className=" flex flex-col gap-4 w-full h-fit items-center justify-center">
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
          onClick={() => {
            preprocess(url).then((data) => {
              console.log("form id : ",data.id)
              console.log("form title : ",title)
              console.log("action url : ",data.url)
              console.log("og url : ",url)
              data.entries.forEach((entry) => console.log(entry))
              console.log("user mail : ",userMail)
              console.log("user id: ", currUser)
            })
            
            
          }}
          className=" bg-white-100 cursor-pointer p-2 rounded-lg"
        />
        <p className=" bg-black-100 text-white-100">{currUser}</p>
      </div>
    );
  };

export default Form