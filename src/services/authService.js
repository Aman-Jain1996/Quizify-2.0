import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ToastHandler } from "utils";
import { auth, db } from "../firebase";

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    if (err.code === "auth/user-not-found")
      ToastHandler("error", "User not Registered!");
    else if (err.code === "auth/wrong-password")
      ToastHandler("error", "Invalid Password!");
    else ToastHandler("error", "Login failed!");
    console.error(err.message);
  }
};

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const initialUserObj = {
      uid: user.uid,
      name,
      email,
    };
    const docRef = await addDoc(collection(db, "users"), initialUserObj);
    if (docRef) return { token: res.user.accessToken, user: initialUserObj };
    else throw new Error();
  } catch (err) {
    if (err.code === "auth/email-already-in-use")
      ToastHandler("error", "Email already Registered!");
    else ToastHandler("error", "SignUp Failed!");
    console.error(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { login, signup, logout };
