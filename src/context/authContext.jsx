import { useEffect, useState, createContext } from "react";
import ProfImg from "../assets/img/prof.jpeg"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {

        const res = await axios.post("https://2geda.tech/api/v1/auth/login", inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data);

    };
    
    const logout = () =>{
        localStorage.removeItem("user");
       
        
        
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))

    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

} 