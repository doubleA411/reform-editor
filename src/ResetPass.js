import React, { useState, useEffect } from 'react'
import { supabase } from './supabase';

function ResetPass() {



 const [ show , setShow ] = useState(false);
 const [ pass , setPass ] = useState("");
 const [ pass2, setPass2 ] = useState("");
 const [ msg, setMsg ] = useState("");
 const [ err , setErr] = useState("");

 const resetPassword = async () => {
 
        if(pass === pass2) {
            console.log("in if")
            const { data, error } = await supabase.auth.updateUser({
                password: pass,
            })
            if(data) setMsg("Password updated successfully!");
            if(error) setErr("There was an error updating your password");
        } else {
            setErr("Password does match");
        }
  
    }

//  useEffect(() => {
//    supabase.auth.onAuthStateChange(async (event, session) => {
//      if (event === "PASSWORD_RECOVERY") {
//        const newPassword = prompt(
//          "What would you like your new password to be?"
//        );
//        const { data, error } = await supabase.auth.updateUser({
//          password: newPassword,
//        });

//        if (data) alert("Password updated successfully!");
//        if (error) alert("There was an error updating your password.");
//      }
//    });
//  }, []);
    
  return (
    <div className="text-white-100 flex flex-col min-h-screen bg-black-100 items-start p-10 gap-6">
      <p className=" text-3xl font-semibold">Reset Password</p>
      <p>
        Why did the password go to the therapist? Because it needed a reboot!
      </p>
      <div className="flex items-center text-black-100 gap-4 ">
        <input
          type={show ? "text" : "password"}
          className=" outline-none p-2 rounded-md w-[250px]"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p
          onClick={() => setShow(!show)}
          className="text-white-100 cursor-pointer"
        >
          {show ? "Hide" : "Show"}
        </p>
      </div>
      <input
        type="password"
        className=" outline-none p-2 rounded-md w-[250px] text-black-100"
        value={pass2}
        onChange={(e) => setPass2(e.target.value)}
      />
      <button
        className=" bg-white-100 px-3 py-1 text-black-100 rounded-lg"
        onClick={() => resetPassword()}
      >
        Reset
      </button>
      {msg && <p className=" text-green-400">{msg}</p>}

      {err && <p className=" text-rose-500">{err}</p>}
      <p className=" text-xl mt-5">reform.</p>
    </div>
  );
}

export default ResetPass