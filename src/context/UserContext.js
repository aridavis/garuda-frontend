import { createContext, useEffect, useState } from "react";
import { AuthController } from "../controllers/AuthController";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthController.getCurrentUser()
      .then((res) => {
        setUser(res.data.content);
      })
      .catch((e) => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
