import React, { useEffect } from "react";
import Header from "../../components/header";
import Redirect from "../../components/redirect";
import { useForm } from 'react-hook-form';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/Dashboard");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit( async (values) => {
        signup(values);
    });

    const handleGoogleRegister = () => {
        // La vaina para registrar al usuario con Google
    }

    return (
        <div className="bg-gradient-to-t from-purple-primary to-custom-black flex flex-col items-center justify-center min-h-screen p-30">
            <Header redirect={true} />
            <div className="flex flex-grow flex-col items-center justify-center overflow-y-auto h-fit">
                <div className="pt-10 flex flex-grow justify-between items-center w-full h-fit md:flex-row flex-col gap-3">
                    <div className="pt-10 flex flex-col bg-background-white w-full md:w-3/4 ml-8 p-8 h-fit rounded-2xl overflow-y-auto md:ml-8 ml-0 mb-8">
                        <h1 className="text-purple-primary font-bold text-4xl mb-4">Bienvenido a RIWA</h1>
                        <h2 className="text-purple-primary font-bold text-lg mb-4">Crea una cuenta</h2>
                        {
                            registerErrors.map((error, i) => (
                                <div className="bg-red-500 p2 text-white" key={i}>
                                    {error}
                                </div>
                            ))
                        }
                        <form className="space-y-4 flex flex-col gap-2" onSubmit={onSubmit}>
                            <div className="flex flex-col">
                                <label className="text-purple-primary block mb-1">Usuario:
                                <input type="username" {...register("username", { required: true })} className="w-full p-2 border-b border-purple-primary bg-transparent" 
                                placeholder=" usuario" />
                                </label>
                                {errors.username && (<p className="text-red-500">username is required</p>)}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-purple-primary block mb-1">Correo electrónico:
                                <input type="email" {...register("email", { required: true })} className="w-full p-2 border-b border-purple-primary bg-transparent" 
                                placeholder="correo electrónico" />
                                </label>
                                {errors.email && (<p className="text-red-500">email is required</p>)}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-purple-primary block mb-1">Contraseña:
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    className="w-full p-2 border-b border-purple-primary bg-transparent"
                                    placeholder=" contraseña "
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_]{10,}$"
                                    title="La contraseña debe tener al menos 10 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial"
                                />
                                </label>
                                {errors.password && (<p className="text-red-500">password is required</p>)}
                            </div>
                            <Redirect beforeRedirect={handleSubmit} className="mt-5">
                                <button className="w-full p-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded">
                                    Crear cuenta
                                </button>
                            </Redirect>
                        </form>
                        <Redirect beforeRedirect={handleGoogleRegister} route={"/login"} className="mt-5">
                            <button className="w-full p-2 text-purple-primary text-lg mt-5 flex justify-center items-center rounded border border-purple-primary">
                                <img className="w-5 h-5 mr-2" src="src/assets/google-icon.svg" alt="Google Logo" />
                                <span className="text-base text-16px">Registrarse con Google</span>
                            </button>
                        </Redirect>

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
}

export default RegisterPage;