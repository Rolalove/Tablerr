import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

// Sign-up function
export const signUp = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      fullName
    );
    return userCredential.user;
  } catch (error) {
    throw error.message;
  }
};

// Log-in function
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error.message;
  }
};

// Log-out function
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error.message;
  }
};
