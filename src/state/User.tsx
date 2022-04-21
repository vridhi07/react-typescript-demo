import { getMaxListeners } from "process";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // at present it is null but in future it is authuser value
  //const [user, setUser] = useState<null | AuthUser>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "vridhi",
      email: "vridhow@getMaxListeners.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <h1>
        user name is{user?.name} and user email is{user?.email}
      </h1> */}

      <h1>
        user name is{user.name} and user email is{user.email}
      </h1>
    </div>
  );
};
