import './App.css';
import Editor from './Editor';
import Login from './Login';
import MyForms from './MyForms';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithoutNav from './WithoutNav';
import WithNav from "./WithNav";
import { useState, useEffect } from 'react';
import Preview from './Preview';
import AddForm from './AddForm';
import Submit from './Submit';
import { supabase } from './supabase';
import ResetPass from './ResetPass';
import { FormDataProvider } from './FormDataContext';
import { AnimatePresence, motion} from 'framer-motion'



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
    <FormDataProvider>
      <Router>
        <div className=" bg-slate-100 min-h-screen xs:hidden sm:hidden md:hidden lg:block">
          <AnimatePresence>
          <Routes>
            <Route
              element={
                !session ||
                window.location.pathname.includes("/preview") ||
                window.location.pathname.includes("/share") ||
                window.location.pathname.includes("/reset-password") ? (
                  <WithoutNav />
                ) : (
                  <WithNav />
                )
              }
            >
              {session && (
                <>
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/myforms" element={<MyForms />} />
                  <Route path="/createForm" element={<AddForm />} />
                  <Route path="/" element={<Home />} />
                </>
              )}
              <Route path="/reset-password" element={<ResetPass />} />
              <Route path="/share/:id" element={<Submit />} />
              <Route path="/preview/:id" element={<Preview />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Route>
          </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </FormDataProvider>
  );
}

export default App;
