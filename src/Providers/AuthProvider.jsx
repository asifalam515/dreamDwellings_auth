import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  //   state for user
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // photo
  const [photo, setPhoto] = useState("");
  // create new user
  const createUser = (email, password, profilePhoto) => {
    setPhoto(profilePhoto);
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login existing user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  //  observer on the Auth object
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      console.log("Observer working", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    loginUser,
    logoutUser,
    loader,
    photo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
