import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const [user , setUser] = useState(null);

    const [ loading  , setLoading] = useState(true);


    // for register 

    const createUser = (email , password )=>{
        return createUserWithEmailAndPassword(auth , email ,password);

    }

    // for login 

    const signIn = (email , password) =>{
        return signInWithEmailAndPassword(auth ,email ,password)

    }


    // for logout

    const logOut = () =>{
        return signOut(auth);
    }

    // for google login 

    const handleGoogleSingIn = () => {
        return signInWithPopup(auth , googleProvider)
    }




    useEffect ( ()=>{

        const unSubscribe = onAuthStateChanged(auth , currentUser =>{

            console.log('user in the auth state change ' , currentUser)
            setUser(currentUser);
            setLoading(false);

        } )

        return () =>{
            unSubscribe();
        }

    } , [] )


    const authInfo ={

        user ,
        loading ,

        signIn,
        createUser,
        logOut,
        handleGoogleSingIn


    }
    return (

        <AuthContext.Provider value={authInfo} >

            {children}


        </AuthContext.Provider>
        
    );
};

export default AuthProvider;