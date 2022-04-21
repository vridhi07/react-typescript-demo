import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Users = () => {
  const UserContexts = useContext(UserContext);
  const handleLogin = () => {
    if (UserContexts) {
      UserContexts.setUser({
        name: "vridhi",
        email: "vridhiw@gmmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (UserContexts) {
      UserContexts.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {UserContexts?.user?.name}</div>
      <div>User email is {UserContexts?.user?.email}</div>
    </div>
  );
};
