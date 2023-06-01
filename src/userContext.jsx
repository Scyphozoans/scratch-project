import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState("")

    const contextProps = {
        username,
        setUsername
    }
    return (
        <UserContext.Provider value ={contextProps}>
        {children}
        </UserContext.Provider>
    )
}


