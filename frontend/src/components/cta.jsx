import React from "react";
import Redirect from "./redirect";

const CtaSection = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500">
            <div className="text w-45">
                <h1 className="text-5xl font-bold text-black mb-4">MEJORA TU MEMORIA CON NOSOTROS</h1>
                <p className="text-xl text-black mb-8">¡Entrena tu cerebro y fortalece tu capacidad de memoria y de concentración con nosotros hoy!</p>
                <Redirect route={"/login"}>
                    <button className="bg-purple-primary text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-secondary">
                        ¡Haz Click Para Empezar!
                    </button>
                </Redirect>
            </div>
        </div>
    );
};

export default CtaSection;