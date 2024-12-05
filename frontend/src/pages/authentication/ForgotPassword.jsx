import React from "react";
import Header from "../../components/header";
import Redirect from "../../components/redirect";

function ForgotPasswordPage() {

    const handleSubmit = (e) => { //No va a redirigir a reset-password, pero es un placeholder para probar cómo se vería la página        
        e.preventDefault();
        //navigate("/reset-password"); 
    }

    return (
        <div className="bg-gradient-to-tl from-purple-primary to-purple-tertiary flex flex-col items-center justify-center min-h-screen p-30 z-20">
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
            <div className="flex justify-center items-center h-screen fixed z-10" >
                <img
                    src="src/assets/question-mark.svg"
                    alt="Signos de interrogación"
                    className="w-1/2 h-auto invert rotate-180 opacity-20"
                />
                <img
                    src="src/assets/question-mark.svg"
                    alt="Signos de interrogación"
                    className="w-1/2 h-auto invert opacity-20"
                />
            </div>
            <div className="pt-10 flex flex-grow justify-center items-center w-2/5 h-fit md:flex-row flex-col gap-5">
                <div className="pt-10 flex items-center flex-col bg-background-white w-full md:w-3/4 ml-8 p-8 h-fit rounded-2xl overflow-y-auto md:ml-8 ml-0 md:mt-0 mt-8 mb-0 z-20">
                    <h1 className="text-center text-purple-primary font-bold text-4xl mb-4">Olvidé mi contraseña</h1>
                    <p className="text-center text-purple-primary text-sm mb-8">Irónico, ¿no crees? No te preocupes, también estuvimos ahí. Solo ingresa tu correo electrónico o nombre de usuario; así mandamos un enlace a tu correo para cambiar la contraseña.</p>
                    <form className="space-y-4 flex w-full flex-col gap-2">
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                placeholder="Correo electrónico, nombre de usuario" 
                                className="w-full p-2 border-b border-purple-primary bg-transparent focus:outline-0" 
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit} // Hay que validar que el correo exista en la base de datos para enviar el enlace
                            className="w-full p-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">
                            Enviar enlace
                        </button>
                    </form>
                    <hr className="mt-5 mb-5" />
                    <Redirect route={"/register"}>
                        <p className="ml-1 text-strong-purple cursor-pointer underline hover:text-light-purple">Crear nueva cuenta</p>
                    </Redirect>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;