import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({redirect, children}) => {

    const navigate = useNavigate();

    //No usaré el componente Redirect para poder redireccionar condicionalmente (esta es la única instancia en la que hago esto)
    const handleLandingRedirect = () => {
        if (redirect) {
            navigate("/");
        };
    }

    return (
        <div className="w-full h-10 z-20">
            <header className="w-full h-full flex top-0 left-0 right-0 pl-4 pr-4 bg-background-white">
                <img
                    onClick={handleLandingRedirect}
                    className="w-16 h-auto"
                    src="/src/assets/riwa-logo.svg"
                    alt="Mentality Logo"
                />
                <div className="flex-grow flex items-center justify-end h-full">
                    {Children.map(children, (child) => (
                        <div className="flex ml-4 items-center h-full hover:bg-purple-primary">{child}</div>
                    ))}
                </div>
            </header>
        </div>
    );
};

export default Header;