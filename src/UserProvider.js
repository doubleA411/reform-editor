import { createContext, useContext, useState, useEffect } from "react";
import {supabase} from './supabase'


const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
};

export const UserProvider = ({children}) => {
    const [ user, setUser] = useState();

    useEffect( () => {
       const fetchUser = async () => {
            try {
              const { data : { cuser,error } } = await supabase.auth.getUser();

              if (error) {
                console.error("Error Occured : ", error);
              } else {
                setUser(cuser);
                // console.log(cuser);
              }
            } catch (error) {
                console.error("Error fetching user : ",error.message)
                setUser(null)
            }
       };

       fetchUser();
    },[])

    return  (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}