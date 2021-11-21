import { createContext, useEffect, useState } from "react";
import { AuthController } from "../controllers/AuthController";
import { Constant } from "../constants/Constant";
const cookie = require("react-cookies");

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthController.getCurrentUser()
      .then((res) => {
        setUser(res.data.content);
        if (window.location.pathname === "/") {
          window.location.pathname = "/job";
        }
      })
      .catch((e) => {
        setUser(null);
        cookie.remove(Constant.ACCESS_TOKEN, { path: "/" });
        if (
          window.location.pathname !== "/" &&
          window.location.pathname !== "/login" &&
          window.location.pathname !== "/register" &&
          window.location.pathname !== "/co/login"
        ) {
          window.location.pathname = "/";
        }
      });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
