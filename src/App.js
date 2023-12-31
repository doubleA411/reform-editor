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
import Form from './Form';
import Preview from './Preview';

const sb_url = process.env.REACT_APP_SB_URL
const sb_key = process.env.REACT_APP_SB_KEY

export const supabase = createClient(
  sb_url,
  sb_key
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
          <Route
            element={
              !session || window.location.pathname.includes('/preview') ? (
                <WithoutNav />
              ) : (
                <WithNav />
              )
            }
          >
            { session && (
              <>
            <Route path="/editor" element={<Editor />} />
            <Route path="/myforms" element={<MyForms />} />
            <Route path="/createForm" element={<Form />} />
            <Route path="/" element={<Home />} />
              </>
            )}
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/login" element={<Login />} />
            <Route path='*' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
