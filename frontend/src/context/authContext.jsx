import { useEffect, useState, createContext } from "react";
import ProfImg from "../assets/img/prof.jpeg"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        //TO DO
        setCurrentUser({
            id: 1,
            name: "San Harmleff",
            profilePic: "https://images.pexels.com/photos/9378406/pexels-photo-9378406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });

        const navigate = useNavigate()

        return navigate('/')
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))

    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )

} 