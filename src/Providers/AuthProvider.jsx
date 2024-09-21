import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  // State for user
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // Photo
  const [photo, setPhoto] = useState("");
  // Name
  const [name, setName] = useState("");

  // Create new user
  const createUser = (email, password, profilePhoto, name) => {
    setPhoto(profilePhoto);
    setName(name);
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login existing user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logoutUser = () => {
    setLoader(true);
    setName("");
    setPhoto("");
    return signOut(auth);
  };

  // Update profile
  const updateProfileInfo = async (updatedName, updatePhoto) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, {
          displayName: updatedName,
          photoURL: updatePhoto,
        });
        setUser({
          ...user,
          displayName: updatedName,
          photoURL: updatePhoto,
        });
        console.log("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile: ", error);
      }
    }
  };

  // Observer on the Auth object
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
    photo: user ? user.photoURL : null,
    name: user ? user.displayName : null,
    setPhoto,
    setName,
    setUser,
    setLoader,
    updateProfileInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
