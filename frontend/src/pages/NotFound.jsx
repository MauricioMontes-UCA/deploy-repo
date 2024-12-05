import React from "react";

import Header from "../components/header";
import Redirect from "../components/redirect";

const NotFoundPage = () => {

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-tr from-purple-primary via-purple-secondary to-strong-purple">
            <Header redirect={true}>
                <Redirect route={"/login"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Iniciar Sesión
                    </button>
                </Redirect>
                <Redirect route={"/register"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Registrarse
                    </button>
                </Redirect>
            </Header>

            <div className="flex flex-col w-fit h-full text-center mt-10">
                <h1 className="font-bold text-9xl text-white">404</h1>
                <p className="font-bold text-5xl text-white mb-5">Página no encontrada</p>
                <p className="text-white mt-5">La página que estás buscando no
                    existe o no se encuentra disponible.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;