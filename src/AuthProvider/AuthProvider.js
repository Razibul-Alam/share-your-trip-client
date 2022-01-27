import React,{createContext} from 'react';
import useFirebase from './../Hooks/useFirebase';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    
    const infoContext=useFirebase()
    console.log(infoContext)
    return (
        <AuthContext.Provider value={infoContext}>
            {children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;