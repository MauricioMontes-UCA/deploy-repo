import React from "react";
import Redirect from "./redirect";

const Benefits = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-custom-black to-purple-primary">
            <div className="mx-20 mb-5 bg-background-white rounded-2xl">
                <img 
                    src="/src/assets/concentration-meditation.png" 
                    alt="Persona pensando abstracto"
                    className="m-5" />
                <div className="my-5">
                    <h2 className="text-xl font-bold text-black mb-4">INCREMENTO DE LA CONCENTRACIÓN</h2>
                    <p className="text-xl text-black mb-8">Aumenta tu capacidad de concentración con actividades específicas que mejoran tu enfoque y atención. Mantente en el camino correcto y alcanza tus metas con un entrenamiento continuo y efectivo.</p>
                </div>
            </div>
            <div className="mx-20 mt-5 bg-background-white rounded-2xl">
                <div className="my-5">
                    <h2 className="text-xl font-bold text-black mb-4">MEJORA LA MEMORIA</h2>
                    <p className="text-xl text-black mb-8">Fortalece tu memoria con ejercicios diseñados para aumentar la retención y el recuerdo de información. Nuestros desafíos te ayudarán a mantener tu mente ágil y tu memoria en su mejore estado.</p>
                </div>
                <img 
                    src="/src/assets/cards.png" 
                    alt="Cartas de la baraja inglesa" />
            </div>
        </div>
    );
};

export default Benefits;


<Redirect route={"/login"}>
    <button className="bg-purple-primary text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-secondary">
        ¡Haz Click Para Empezar!
    </button>
</Redirect>