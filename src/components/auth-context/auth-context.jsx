import { useState } from "react";
import { AuthContext } from ".";
import { user } from "../../constants/user";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });
 
  const userLogin = () => {
    setAuth((prev) => {
      return prev.isAuthorized
              ? { isAuthorized: false }
              : { isAuthorized: true, name: user.name, id: user.id };
    });
  };

  return (
    <AuthContext.Provider value={{ auth, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
