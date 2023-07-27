import { useEffect, useState, createContext } from "react";

export const ShowStoriesContext = createContext();

export const ShowStoriesContextProvider = ({children}) =>{
   
    const [showStories, setShowStories] = useState(false);
    
    
    
    const showHide = ()=> {
        setShowStories(!showStories)
        
    }    
    
    return(
        
        <ShowStoriesContext.Provider value ={ {showStories, showHide}}>
            {children}
        </ShowStoriesContext.Provider>
    )
    
}