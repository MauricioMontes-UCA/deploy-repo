import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header";

const UserSugestionsPage = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        //Lógica para cerrar sesión, en este caso simplemente redirigimos a la página de login
        //pero en un caso real tenemos que hacer algo para eliminar el token de la sesión
        navigate("/login");
    }

    const handleDashboardRedirect = () => {
        navigate("/dashboard");
    }

    const handleStatisticsRedirect = () => {
        navigate("/stats");
    }

    const handleProfileRedirect = () => {
        navigate("/profile");
    }

    const handleChangePasswordRedirect = () => {
        navigate("/change-password");
    }

    return (
        <div className="bg-gradient-to-br from-purple-primary to-strong-purple flex flex-col flex-grow h-full md:h-screen lg:h-screen xl:h-screen">
            <Header redirect={false}>
                <button
                    onClick={handleDashboardRedirect}
                    className="btn pl-2 pr-2 bg-background-white text-purple-primary font-medium hover:bg-purple-primary hover:text-background-white h-full">
                    Dashboard
                </button>
                <button
                    onClick={handleStatisticsRedirect}
                    className="btn pl-2 pr-2 bg-background-white text-purple-primary font-medium hover:bg-purple-primary hover:text-background-white h-full">
                    Estadísticas
                </button>
                <button
                    onClick={handleProfileRedirect}
                    className="btn pl-2 pr-2 bg-background-white text-purple-primary font-medium hover:bg-purple-primary hover:text-background-white h-full">
                    Perfil
                </button>
                <button
                    onClick={handleLogOut}
                    className="btn pl-2 pr-2 bg-background-white text-red-500 font-medium hover:bg-red-500 hover:text-background-white h-full">
                    Cerrar Sesión
                </button>
            </Header>
            <div className="p-6 h-3/4 my-4 flex flex-col lg:flex-row gap-6">
                <div className="bg-background-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
                    

                    <button 
                        onClick={handleProfileRedirect}
                        className="w-full text-left font-bold text-purple-primary p-2 rounded-md my-2 hover:outline hover:outline-purple-primary">
                        Perfil
                    </button>

                    <button 
                        onClick={handleChangePasswordRedirect}
                        className="w-full text-left font-bold text-purple-primary p-2 rounded-md my-2 hover:outline hover:outline-purple-primary">
                        Cambiar contraseña
                    </button>

                    <button 
                        className="w-full text-left font-bold text-white bg-purple-primary p-2 rounded-md my-2">
                        Sugerencias
                    </button>

                </div>
                <div className="flex flex-col justify-between bg-background-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
                    <div className="bg-transparent flex flex-col flex-grow">
                        <h2 className="text-2xl font-medium mb-6">Sugerencias</h2>
                        <form className="h-full">
                            <div className="h-full">
                                <label className="block text-gray-700">Dinos lo que piensas:</label>
                                <textarea 
                                    placeholder="Añade tu sugerencia"  
                                    className="h-4/5 max-h-32 w-full p-2 border border-gray-300 resize-none rounded-md focus:outline-zinc-500" />
                            </div>
                        </form>
                    </div>
                    <div className="bg-transparent flex justify-end mt-5">
                        <button
                            //onClick={hanldeSubmitSugestion}
                            className="p-2 bg-purple-primary hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">
                            Enviar
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserSugestionsPage;