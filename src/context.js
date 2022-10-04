import React,{useState,createContext} from 'react'
import AuthorImage from './assets/imgs/author.jpg'

export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [user,setUser] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const author = {
        img:AuthorImage,
        name:'Princewill Awili'
    }

    return (
        <states.Provider value={{user,setUser,isLoading,setIsLoading,author}}>
            {children}
        </states.Provider>
    )
}



