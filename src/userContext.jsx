import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
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


export default UserContext;