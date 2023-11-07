import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const auth =getAuth(app)
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
     const [user,setUser]=useState();
    const googleSignIn =(value)=>{
        return signInWithPopup(auth,googleProvider);
    };
    const signUp=(email,password,name,photoURL)=>{
        return createUserWithEmailAndPassword(auth,email,password,name,photoURL);
    };
    const signIn=(email,password,name,photoURL)=>{
        return signInWithEmailAndPassword(auth,email,password,name,photoURL);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("state change")
            setUser(currentUser)
        })
        return(()=>{
            unsubscribe()
        })
    },[])
    const logout=()=>{
        return signOut(auth);
    }
    const AuthInfo ={
        googleSignIn,signUp,signIn,user,logout,
    }

    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    
};

export default AuthProvider;

// import { createContext, useEffect, useState } from 'react';
// import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile, getAuth } from "firebase/auth";
// //import { auth } from '../config/firebaseConfig';
// import app from "../Firebase/firebase.config";

// const auth =getAuth(app)
// export const AuthContext = createContext(null);


// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider()

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState({})
//     const [loading, setLoading] = useState(true)


//     //google login
//     const googleLogin = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider);
//     }
//     //github login
//     const githubLogin = () => {
//         setLoading(true)
//         return signInWithPopup(auth, githubProvider);
//     }

//     // create user 
//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password);
//     }


//     // signin user
//     const signin = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password);
//     }


//     const handleUpdateProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         })
//     }

//     // to sign out user
//     const logOut = () => {
//         return signOut(auth)
//     }


//     // using observer
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             setUser(user);
//             setLoading(false)
//         });
//     }, [])




//     const authentication = {
//         googleLogin,
//         createUser,
//         signin,
//         logOut,
//         user,
//         loading,
//         githubLogin,
//         handleUpdateProfile
//     }
//     return (
//         <AuthContext.Provider value={authentication}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;