import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);
  const localStorageUser = localStorage.getItem("authUser");
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") ?? ""
  );

  const [authUser, setAuthUser] = useState(
    localStorageUser ? JSON.parse(localStorageUser) : null
  );
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        authUser,
        setAuthUser,
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
