// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ childern }) => {
//     const [currentUser, setCurrentUser] = useState(
//         JSON.parse(localStorage.getItem("user")) || null
//     );

//     const login = () => {
//         //to do
//     };

//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//     }, [currentUser]);

//     return (
//         <AuthContext.Provider value={{ }}>
//             {childern}
//         </AuthContext.Provider>
//     );
// };

//Copied function

import { createContext, useEffect, useState } from "react";
import dp from "./dp.jpg"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Adil Khan",
      profilePic:
        "https://media.licdn.com/dms/image/D4D03AQEzfj1xfMN8ZQ/profile-displayphoto-shrink_800_800/0/1664542995288?e=1687996800&v=beta&t=sVOuB2yB2u_qlfuMiqcXqZLt3FtlKcFraNdFbXEfpQY"
        // "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
 