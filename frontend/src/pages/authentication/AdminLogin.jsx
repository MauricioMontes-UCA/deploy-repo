import React from "react";
import Header from "../../components/header";
import Redirect from "../../components/redirect";

const AdminLoginPage = () => {

    return (
        <div class="bg-gradient-to-bl from-light-purple to-purple-tertiary flex flex-col items-center justify-center h-screen p-30">
            <Header redirect={true} />
            <div className="flex flex-col flex-grow items-center justify-center overflow-y-auto">
                <div className="pt-10 flex justify-between items-center w-full h-fit md:flex-row flex-col gap-5">
                    <div className="pt-10 flex flex-col bg-background-white w-full md:w-3/4 ml-8 p-8 h-fit rounded-2xl overflow-y-auto md:ml-8 ml-0 md:mt-0 mt-8 mb-0">
                        <h1 className="text-purple-primary font-bold text-4xl mb-8">Serivicio de Administrador</h1>
                        <form className="space-y-4 flex flex-col gap-2">
                            <div className="flex flex-col">
                                <label className="text-purple-primary block mb-1">Administrador:</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border-b border-purple-primary bg-transparent" 
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start mt-5">
                                <label className="text-purple-primary block mb-1">Contraseña:</label>
                                <input
                                    type="password"
                                    className="w-full p-2 border-b border-purple-primary bg-transparent"
                                />
                                <Redirect route={"/forgot-password"}>
                                    <button className="mt-1 text-strong-purple block mb-1 underline hover:text-light-purple">
                                        Olvidé la contraseña
                                    </button>
                                </Redirect>
                            </div>
                            <Redirect route={"/admin-dashboard"}>
                                <button type="submit" className="w-full p-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">Acceder</button>
                            </Redirect>
                        </form>
                    </div>
                    <div className="h-auto md:block hidden mt-5">
                        <img
                            className="w-full h-auto"
                            src="src/assets/admin-image.svg"
                            alt="Mentality Logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;