import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  //   state for user
  const [user, setUser] = useState(null);
  // create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login existing user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logoutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
