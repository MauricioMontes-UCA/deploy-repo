import React from "react";

import Header from "../../components/header";
import Card from "../../components/card";
import Redirect from "../../components/redirect";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {

    const { logout } = useAuth();

    const handleLogOut = () => {
        //Lógica para cerrar sesión, hay que eliminar el token de la sesión
    }

    return (
        <div className="flex flex-col items-center flex-grow bg-gradient-to-bl from-purple-primary to-light-purple min-h-screen">
            <Header redirect={false}>
                <Redirect route={"/dashboard"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Inicio
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
                    <button onClick={() => {logout();}} className="btn pl-2 pr-2 bg-transparent text-red-500 font-medium hover:text-background-white h-full">
                        Cerrar Sesión
                    </button>
                </Redirect>
            </Header>
            <div className="p-5 flex flex-grow w-full justify-center items-center">
                <div className="flex flex-col h-fit w-fit md:flex-row md:w-4/5 md:h-3/4">
                <Card
                    title={"Juegos de memoria"}
                    image={"/src/assets/brain.svg"}
                    description={"¡Pon a prueba tu mente y entrena tu memoria! Con nuestros juegos, podrás mejorar tu capacidad de retención y concentración."}
                    route={"/games"}
                    buttonText={"Empezar"}
                />
                <Card
                    title={"Sesión de relajación"}
                    image={"/src/assets/meditation.svg"}
                    description={"Limpia tu mente de distracciones y relajate con una sesión de meditación. A veces, todo lo que necesitas es un momento de paz."}
                    route={"/meditation"}
                    buttonText={"Empezar"}
                />

                </div>

            </div>

        </div>
    );
};

export default Dashboard;