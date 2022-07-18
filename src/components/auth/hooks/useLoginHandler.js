import { db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useReducer } from "react";
import { login } from "services";
import { ToastHandler } from "utils/toastUtils";
import { useAuth } from "../../../contexts";
import { useLocation, useNavigate } from "react-router-dom";

export const useLoginHandler = () => {
  const { setAuthToken, setAuthUser, setShowLoader } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const initialFormState = {
    email: "",
    password: "",
  };

  const initialErrorState = {
    email: "",
    password: "",
  };

  const formDataReducer = (state, action) => {
    switch (action.type) {
      case "email":
        return {
          ...state,
          email: action.payload,
        };
      case "password":
        return {
          ...state,
          password: action.payload,
        };
      default:
        return state;
    }
  };

  const formErrorReducer = (state, action) => {
    switch (action.type) {
      case "emailError":
        return {
          ...state,
          email: action.payload,
        };
      case "passwordError":
        return {
          ...state,
          password: action.payload,
        };
      default:
        return state;
    }
  };

  const [formData, dispatchData] = useReducer(
    formDataReducer,
    initialFormState
  );
  const [errorData, dispatchError] = useReducer(
    formErrorReducer,
    initialErrorState
  );

  const validateForm = (bypassValidation) => {
    let flag = true;
    if (bypassValidation) {
      return flag;
    }
    if (formData.email.trim() === "") {
      dispatchError({
        type: "emailError",
        payload: "Email field is mandatory",
      });
      flag = false;
    }

    if (formData.password.trim() === "") {
      dispatchError({
        type: "passwordError",
        payload: "Password field is mandatory",
      });
      flag = false;
    }
    return flag;
  };

  const loginFormHandler = async (data, bypassValidation) => {
    setShowLoader(true);
    try {
      if (validateForm(bypassValidation)) {
        const response = await login(data.email, data.password);
        if (response) {
          setAuthToken(response.user.accessToken);
          localStorage.setItem("authToken", response.user.accessToken);
          const user = response.user;
          const q = query(
            collection(db, "users"),
            where("uid", "==", user.uid)
          );

          const userDoc = await getDocs(q);
          userDoc.forEach((doc) => {
            const userObj = doc.data();
            setAuthUser(userObj);
            localStorage.setItem("authUser", JSON.stringify(userObj));
          });
          ToastHandler("success", "Logged In successfully!");
          location?.state?.path
            ? navigate(location?.state?.path, { replace: true })
            : navigate("/", { replace: true });
        }
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setShowLoader(false);
    }
  };

  return {
    formData,
    dispatchData,
    errorData,
    dispatchError,
    loginFormHandler,
  };
};
