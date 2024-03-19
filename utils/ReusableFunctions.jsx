import { createContext, useContext, useState } from "react";

const Context = createContext()

export const CreateUserContext = ({children}) => {
    const [navShow, setNav] = useState(false)
    const [service, setService] = useState(false)

    const displayServices = () => {
        setService(!service)
    }

    return(
        <Context.Provider
            value={{
                displayServices, navShow, setNav, service, setService
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const ContextUser = () => {
    const context = useContext(Context)
    return context;
}