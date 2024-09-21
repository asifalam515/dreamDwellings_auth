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
  // name
  const [name, setName] = useState("");
  // create new user
  const createUser = (email, password, profilePhoto, name) => {
    setPhoto(profilePhoto);
    setName(name);
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
    setName("");
    setPhoto("");
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
    name,
    setPhoto,
    setName,
    setUser,
    setLoader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
