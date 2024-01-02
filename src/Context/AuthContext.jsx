import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginStatus = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
        setIsLoggedIn(loginStatus);
    }, []);

    const login = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
