import React from "react";
import Header from "../../components/header";
import Redirect from "../../components/redirect";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";



const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/Dashboard"); 
    }, [isAuthenticated]);

    const handleAutentication = () => { //Esto no puede funcionar así, pues el usuario debe ser autenticado
        //Lógica para autenticar al usuario
    }

    const handleGoogleAutentication = () => {
        //Ni idea de cómo funcionará esto, la verdad
    }

    return (
        <div className="bg-gradient-to-t from-purple-primary to-custom-black flex flex-col items-center justify-center min-h-screen p-30">
            <Header redirect={true} />
            <div className="flex flex-col flex-grow items-center justify-center overflow-y-auto h-fit">
                <div className="pt-10 flex flex-grow justify-between items-center w-full h-fit md:flex-row flex-col gap-5">
                    <div className="pt-10 flex flex-col flex-grow bg-background-white w-full md:w-3/4 ml-8 p-8 h-fit rounded-2xl overflow-y-auto md:ml-8 md:mt-0 mt-8 mb-8">
                        <h1 className="text-purple-primary font-bold text-4xl mb-4">Bienvenido a RIWA</h1>
                        <h2 className="text-purple-primary font-bold text-lg mb-4">Inicio de sesión</h2>
                        {
                            signinErrors.map((error, i) => (
                                <div className="bg-red-500 p2 text-white text-center" key={i}>
                                    {error}
                                </div>
                            ))
                        }
                        <form className="space-y-4 flex flex-col gap-2" onSubmit={onSubmit}>
                            <div className="flex flex-col">
                                <label className="text-purple-primary block mb-1">Correo electrónico:
                                <input type="email" {...register("email", { required: true })} className="w-full p-2 border-b border-purple-primary bg-transparent" 
                                placeholder="correo electrónico" />
                                </label>
                                {errors.email && (<p className="text-red-500">email is required</p>)}
                            </div>
                            <div className="flex flex-col mt-5">
                                <label className="text-purple-primary block mb-1">Contraseña:
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    className="w-full p-2 border-b border-purple-primary bg-transparent"
                                    placeholder=" contraseña "
                                />
                                </label>
                                {errors.password && (<p className="text-red-500">password is required</p>)}
                                <Redirect route={"/forgot-password"}>
                                    <button className="mt-1 text-strong-purple block mb-1 underline hover:text-light-purple">
                                        Olvidé la contraseña
                                    </button>
                                </Redirect>
                            </div>
                            <Redirect beforeRedirect={handleAutentication} className="mt-5">
                                <button
                                    className="w-full p-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded">
                                    Acceder
                                </button>
                            </Redirect>
                            <Redirect beforeRedirect={handleGoogleAutentication} route={"/dashboard"} className="mt-5">
                                <button className="w-full p-2 text-purple-primary text-lg flex justify-center items-center rounded border border-purple-primary">
                                    <img className="w-5 h-5 mr-2" src="src/assets/google-icon.svg" alt="Google Logo" />
                                    <span className="text-base text-16px">Iniciar sesión con Google</span>
                                </button>
                            </Redirect>
                            <div>
                                <Redirect route={"/register"}>
                                    <p className="text-purple-primary text-sm">¿No tienes cuenta?
                                        <span className="ml-1 text-strong-purple cursor-pointer underline hover:text-light-purple">Regístrate</span>
                                    </p>
                                </Redirect>
                            </div>
                        </form>
                    </div>
                    <div className="h-auto md:block hidden mt-5">
                        <img
                            className="w-full h-auto"
                            src="src/assets/mascot.svg"
                            alt="Mentality Logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;