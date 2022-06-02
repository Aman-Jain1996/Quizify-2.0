import React, { useReducer } from "react";
import { signup } from "services";
import {
  checkEmail,
  checkName,
  checkPassword,
  checkPasswordMatch,
  ToastHandler,
} from "../../../utils";
import { useAuth } from "../../../contexts";
import { useNavigate } from "react-router-dom";

export const useSignUpHandler = () => {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const initialFormState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialErrorState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formDataReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return {
          ...state,
          name: action.payload,
        };
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
      case "confirmPassword":
        return {
          ...state,
          confirmPassword: action.payload,
        };
      default:
        return state;
    }
  };

  const formErrorReducer = (state, action) => {
    switch (action.type) {
      case "nameError":
        return {
          ...state,
          name: action.payload,
        };
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
      case "confirmPasswordError":
        return {
          ...state,
          confirmPassword: action.payload,
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

  const validateForm = () => {
    let flag = true;
    if (formData.name.trim() === "") {
      dispatchError({
        type: "nameError",
        payload: "Name field is mandatory",
      });
      flag = false;
    } else if (!checkName(formData.name)) {
      dispatchError({
        type: "nameError",
        payload: "Name field can only have letters",
      });
      flag = false;
    }

    if (formData.email.trim() === "") {
      dispatchError({
        type: "emailError",
        payload: "Email field is mandatory",
      });
      flag = false;
    } else if (!checkEmail(formData.email)) {
      dispatchError({
        type: "emailError",
        payload: "Please provide valid Email!",
      });
      flag = false;
    }

    if (formData.password.trim() === "") {
      dispatchError({
        type: "passwordError",
        payload: "Password field is mandatory",
      });
      flag = false;
    } else if (!checkPassword(formData.password)) {
      dispatchError({
        type: "passwordError",
        payload:
          "Password must be 6 digits and must contain only letters and digits",
      });
      flag = false;
    }

    if (formData.confirmPassword.trim() === "") {
      dispatchError({
        type: "confirmPasswordError",
        payload: "Confirm Password field is mandatory",
      });
      flag = false;
    } else if (!checkPassword(formData.confirmPassword)) {
      dispatchError({
        type: "confirmPasswordError",
        payload:
          "Password must be 6 digits and must contain only letters and digits",
      });
      flag = false;
    }

    if (!checkPasswordMatch(formData.password, formData.confirmPassword)) {
      dispatchError({
        type: "confirmPasswordError",
        payload: "Confirm Password and Password must match",
      });
      flag = false;
    }
    return flag;
  };

  const signUpFormHandler = async (data) => {
    try {
      if (validateForm()) {
        const response = await signup(data.name, data.email, data.password);
        if (response.user) {
          setAuthToken(response.token);
          setAuthUser(response.user);
          localStorage.setItem("authUser", JSON.stringify(response.user));
          localStorage.setItem("authToken", response.token);
          ToastHandler("success", "Signed up and Logged in successfully!");
          navigate("/", { replace: true });
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    formData,
    dispatchData,
    errorData,
    dispatchError,
    signUpFormHandler,
  };
};
