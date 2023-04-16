// import { createContext, useEffect, useState } from "react";

// export const DarkModeContext = createContext();

// export const DarkModeContextProvider = ({ childern }) => {
//     const [darkMode, setDarkMode] = useState(
//         JSON.parse(localStorage.getItem("darkMode")) || false
//     );

//     const toggle = () => {
//         setDarkMode(!darkMode);
//     };

//     useEffect(() => {
//         localStorage.setItem("darkMode", darkMode);
//     }, [darkMode]);

//     return (
//         <DarkModeContext.Provider value={{ darkMode, toggle }}>
//             {childern}
//         </DarkModeContext.Provider>
//     );
// };

// refer 1:12 timestamp


//New Copied

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};
