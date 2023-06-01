import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState("")
    const [userBoards, setUserBoards] = useState([])
    const [currBoard, setCurrBoard] = useState({})

    const contextProps = {
        username,
        setUsername,
        userBoards,
        setUserBoards
    }
    return (
        <UserContext.Provider value ={contextProps}>
        {children}
        </UserContext.Provider>
    )
}


