import './App.css';
import Editor from './Editor';
import Login from './Login';
import MyForms from './MyForms';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithoutNav from './WithoutNav';
import WithNav from "./WithNav";


import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
  "https://lhazbpfnwoiasaecxchh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoYXpicGZud29pYXNhZWN4Y2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2Njc1ODAsImV4cCI6MjAxOTI0MzU4MH0.RFGj3VJETcTDGQhctuDmHsvcxCoQ4fLvhncV2PpjyHw"
);

function App() {

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data : {session}}) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe()
  }, [])

  
  

  return (
    <Router>
      <div className=" bg-slate-100 min-h-screen sm:hidden lg:block">
        <Routes>
          <Route element={ !session ? <WithoutNav /> : <WithNav />}>
            <Route path="/" element={ !session ? <Login /> : <Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/myforms" element={<MyForms />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
