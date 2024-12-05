import React from "react";

import Header from "../../components/header";
import Card from "../../components/card";
import Redirect from "../../components/redirect";

const GamesDashboard = () => {
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
            </Header>
            <div className="p-5 flex flex-grow w-full justify-center items-center">
                <div className="flex flex-col h-fit w-fit md:flex-row md:w-4/5 md:h-3/4">
                <Card
                    title={"Cartas de memoria"}
                    image={"/src/assets/memory-cards.svg"}
                    description={"Un sencillo de juego de memoria, donde tendrás que recordar la posición de las cartas y encontrar las parejas."}
                    route={"/game-memory"}
                    buttonText={"Empezar"}
                />
                <Card
                    title={"Torre de Hanoi"}
                    image={"/src/assets/hanoi-tower.svg"}
                    description={"Prueba que tan eficiente eres para resolver problemas con este juego de la torre de Hanoi."}
                    route={"/game-tower"}
                    buttonText={"Empezar"}
                />

                </div>

            </div>

        </div>
    );
};

export default GamesDashboard;