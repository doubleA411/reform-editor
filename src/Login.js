import React, { useState } from 'react'
import image from "./assets/image.jpeg";
import mm from './assets/mm.png';
import { supabase } from './App';


function Login() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [exst, setExst] = useState(false)
  const [sent, setSent] = useState(false)

  // Sign up function
  async function signUpNewUser(mail, password) {
    const {data,error} = await supabase.auth.signUp({
      email: mail,
      password: password,
      
    })

    if(data) {
      console.log(data.user)
      setSent(true);
     
    } else {
        console.log("Error occured while authenticating user : ", error);
    }
    

    

  }

  // Sign in function
  async function signInWithEmail( mail , password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: password,
    });
    console.log(data, error);

  }


  return (
    <div className=" flex">
      <div className=" flex-auto">
        <img
          src={image}
          alt=""
          srcset=""
          className="h-full w-[812px] relative"
        />
        <div className=" flex items-center gap-2 justify-center absolute bottom-0 left-0 p-4 rounded-2xl border-2 m-10 backdrop-blur-md">
          <p className=" text-white-200"> Created by Minimal Mind </p>
          <img src={mm} alt="" className=" h-[20px]" />
        </div>
      </div>
      <div className=" flex-auto flex flex-col items-center px-36 justify-center gap-10 bg-black-100 h-screen w-[700px] text-slate-100">
        <h1 className="text-4xl">reform.</h1>

        <div
          className={` ${
            sent === true ? "hidden" : "flex"
          } flex-col gap-3 items-center w-full`}
        >
          <div className=" bg-white-200 text-black-100 w-full py-3 px-5 rounded-xl shadow-md shadow-slate-600 cursor-pointer">
            <input
              type="text"
              className=" outline-none w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" bg-white-200 text-black-100 w-full py-3 px-5 rounded-xl shadow-md shadow-slate-600 cursor-pointer">
            <input
              type="password"
              className=" outline-none w-full"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div
            className=" bg-black-200 text-white-100 w-fit py-3 px-5 rounded-xl shadow-md backdrop-blur-lg cursor-pointer"
            onClick={() =>
              exst === true ? signInWithEmail(email, pass) : signUpNewUser(email,pass)
            }
          >
            {exst === true ? "Sign in" : "Sign up"}
          </div>

          <p>
            Already have an account ?{" "}
            <span>
              <input
                type="checkbox"
                value={exst}
                onChange={(e) => setExst(!exst)}
                className=" accent-black-200"
              />
            </span>
          </p>
        </div>
        <p className={` ${sent === true ? "block" : "hidden"} text-green-300`}>
          Verification mail has been sent
        </p>
      </div>
      {/* <div className=" text-sm absolute text-white-100 border-2 m-10 backdrop-blur-md p-4 top-0 left-0 w-fit h-fit rounded-xl">
        <p>Verification email has been sent</p>
      </div> */}
    </div>
  );
}

export default Login



// aakashsuresh62@gmail.com

// password