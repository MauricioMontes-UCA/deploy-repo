import React from "react";

import Header from "../../components/header";
import Card from "../../components/card";
import Redirect from "../../components/redirect";

const AdminDashboard = () => {

    const handleLogOut = () => {
        //Lógica para cerrar sesión, hay que eliminar el token de la sesión
    }

    return (
        <div className="flex flex-col items-center flex-grow bg-gradient-to-bl from-purple-primary to-light-purple min-h-screen">
            <Header redirect={false}>
                <Redirect route={"/profile"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Perfil
                    </button>
                </Redirect>
                <Redirect beforeRedirect={handleLogOut} route={"/login"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-red-500 font-medium hover:text-background-white h-full">
                        Cerrar Sesión
                    </button>
                </Redirect>
            </Header>
            <div className="p-5 flex flex-grow w-full justify-center items-center">
                <div className="flex flex-col h-fit w-fit md:flex-row md:w-4/5 md:h-3/4">
                <Card
                    title={"Administrar usuarios"}
                    image={"/src/assets/users.svg"}
                    description={"Maneja la información de los usuarios, roles y permisos; además de poder eliminar cuentas problemáticas."}
                    route={"/admin/users"}
                    buttonText={"Acceder"}
                />
                <Card
                    title={"Sugerencias de los usuarios"}
                    image={"/src/assets/suggestion.svg"}
                    description={"Lo que los usuarios piensan sobre la plataforma, y aspectos a mejorar del sitio web y de los servicios."}
                    route={"/admin/suggestions"}
                    buttonText={"Acceder"}
                />

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;