import React from "react";

import Header from "../../components/header";
import Redirect from "../../components/redirect";

const ChangePasswordPage = () => {

    const handleLogOut = () => {
        //Lógica para cerrar sesión, hay que eliminar el token de la sesión
    }

    const handleSaveChanges = () => {
        //Lógica para guardar los cambios
    }

    return (
        <div className="bg-gradient-to-br from-purple-primary to-strong-purple flex flex-col flex-grow h-full md:h-screen lg:h-screen xl:h-screen">
            <Header redirect={false}>
                <Redirect route={"/dashboard"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:bg-purple-primary hover:text-background-white h-full">
                        Dashboard
                    </button>
                </Redirect>
                <Redirect route={"/stats"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Estadísticas
                    </button>
                </Redirect>
                <Redirect route={"/profile"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Perfil
                    </button>
                </Redirect>
                <Redirect beforeRedirect={handleLogOut} route={"/login"}>
                    <button
                        className="btn pl-2 pr-2 bg-transparent text-red-500 font-medium hover:text-background-white h-full">
                        Cerrar Sesión
                    </button>
                </Redirect>
            </Header>
            <div className="p-6 h-3/4 my-4 flex flex-col lg:flex-row gap-6">
                <div className="bg-background-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
                    <Redirect route={"/profile"}>
                        <button className="w-full text-left font-bold text-purple-primary p-2 rounded-md my-2 hover:outline hover:outline-purple-primary">
                            Perfil
                        </button>
                    </Redirect>
                    <button
                        className="w-full text-left font-bold text-white bg-purple-primary p-2 rounded-md my-2">
                        Cambiar contraseña
                    </button>
                    <Redirect route={"/sugestions"}>
                        <button className="w-full text-left font-bold text-purple-primary p-2 rounded-md my-2 hover:outline hover:outline-purple-primary">
                            Sugerencias
                        </button>
                    </Redirect>
                </div>
                <div className="flex flex-col justify-between bg-background-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
                    <div className="bg-transparent flex flex-col justify-between">
                        <h2 className="text-2xl font-medium mb-6">Cambiar contraseña</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Nueva contraseña</label>
                                <input type="password" placeholder="Contrasñea" className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Confirmar nueva contraseña</label>
                                <input type="password" placeholder="Contraseña" className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </form>
                    </div>
                    <div className="bg-transparent flex justify-end mt-5">
                        <button
                            onClick={handleSaveChanges}
                            className="p-2 bg-purple-primary hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">
                            Guardar Cambios
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;