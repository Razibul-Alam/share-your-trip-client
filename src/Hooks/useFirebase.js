import { initializeApp } from "firebase/app";
import axios from 'axios'
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,updateProfile} from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from "../FirebaseConfig/FirebaseConfig";


const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[admin,setAdmin]=useState(false)
  const[authError,setAuthError]=useState('')
  const[isLoading,setIsLoading]=useState(true);
// google login
const loginWithGoogle=()=>{
  setIsLoading(true)
   return signInWithPopup(auth, provider)
      .finally(()=>setIsLoading(false))
      
        }
       
        // resister user
        const registerUser=(email,password,name,navigate)=>{
          setAuthError('');
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  setAuthError('');
                  const newUser={email:email,displayName:name}
                  setUser(newUser)
                  const dbUser={email:email,displayName:name,role:'user'}
                  savedUserToDatabase(dbUser)
                  navigate('/')
                   // send name to firebase after creation
                updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              })
              .catch((error) => {
                  setAuthError(error.message);
                  console.log(error);
              })
              .finally(() => setIsLoading(false));
        }
//  send user data to server
const savedUserToDatabase=(user)=>{
  axios.post('https://dry-mesa-09659.herokuapp.com/addUser',user)
      .then(response => { 
       
      })

}
        // login user with email and password
        const loginWithEmail=(email,password,navigate)=>{
          setAuthError('');
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
  
                  setAuthError('');
                  navigate('/')
              })
              .catch((error) => {
                  setAuthError(error.message);
              })
              .finally(() => setIsLoading(false));
        }

    //   auth identity
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
     
     },[])
        // ----
        // check admin
        useEffect(()=>{
          axios.get(`https://dry-mesa-09659.herokuapp.com/getAdmin?email=${user.email}`)
          .then(res => {
            const isAdmin = res.data;
            setAdmin(isAdmin)
            console.log(isAdmin)
          })
        },[user.email])
        // logout method
const logOut=()=>{
  setIsLoading(true)
  signOut(auth).then(() => {
    setUser({})
    setAdmin(false)
  }).catch((error) => {
    
  }).finally(()=>setIsLoading(false))
  
}
        return {loginWithGoogle,user,setUser,logOut,authError,setAuthError,isLoading,registerUser,loginWithEmail,admin}
}
export default useFirebase;
