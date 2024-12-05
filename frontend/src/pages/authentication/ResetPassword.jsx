import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const ResetPasswordPage = () => {

    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate("/login");
    }

    const [formInput, setFormInput] = useState({
        password: "",
        confirmPassword: ""
    });

    const [formError, setFormError] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleInput = (name, value) => {
        setFormInput({ ...formInput, [name]: value });
    };

    const validateFormInput = (e) => {
        e.preventDefault();

        const hasUppercase = /[A-Z]/.test(formInput.password);
        const hasLowercase = /[a-z]/.test(formInput.password);
        const hasNumber = /[0-9]/.test(formInput.password);
        const hasSpecialChar = /[@#$%&_]/.test(formInput.password);

        let errors = {
            password: "",
            confirmPassword: ""
        };

        switch (true) {
            case !formInput.password:
                setFormError({ ...errors, password: "El campo no puede estar vacío" });
                break;
            case !hasUppercase:
                setFormError({ ...errors, password: "La contraseña debe tener mayúsculas" });
                break;
            case !hasLowercase:
                setFormError({ ...errors, password: "La contraseña debe tener minúsculas" });
                break;
            case !hasNumber:
                setFormError({ ...errors, password: "La contraseña debe tener números" });
                break;
            case !hasSpecialChar:
                setFormError({ ...errors, password: "La contraseña debe usar caracteres especiales (ej. @#$%&_)" });
                break;
            case (formInput.password.length < 10):
                setFormError({ ...errors, password: "La contraseña debe tener al menos 10 caracteres" });
                break;
            case (formInput.password !== formInput.confirmPassword):
                setFormError({ ...errors, confirmPassword: "Las contraseñas no coinciden" });
                break;
            default: //No sé que tan buena idea es esta, la verdad
                setFormError({ ...errors, password: "", confirmPassword: "" });
                handleLoginRedirect();
                break;
        }
    };

    
    const images = Array(4).fill("src/assets/asterisk.svg");
    
    return (
        <div className="bg-gradient-to-tl from-purple-primary to-purple-tertiary flex flex-col items-center justify-center min-h-screen p-30 z-20">
            <Header redirect={false} />

            <div className="flex justify-center items-center h-screen fixed gap-3" >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Asterisco"
                        className="w-1/5 h-auto invert opacity-20" />
                ))}
            </div>
            <div className="pt-10 flex flex-grow justify-center items-center w-2/5 h-fit md:flex-row flex-col gap-5">
                <div className="pt-10 flex items-center flex-col bg-background-white w-full md:w-3/4 p-8 h-fit rounded-2xl overflow-y-auto z-20">
                    <h1 className="text-center text-purple-primary font-bold text-4xl mb-4">Cambiar contraseña</h1>
                    <p className="text-center text-purple-primary text-sm mb-8">Cambia tu contraseña a una nueva, luego inicia sesión con tu nueva contraseña. ¡Que no se te olvide esta contraseña!</p>
                    <form
                        onSubmit={validateFormInput}
                        className="space-y-4 flex w-full flex-col gap-2"
                    >
                        <div className="flex flex-col">
                            <input
                                name="password"
                                value={formInput.password}
                                onChange={(event) => handleInput(event.target.name, event.target.value)}
                                type="password"
                                placeholder="Nueva contraseña"
                                className="w-full p-2 border-b border-purple-primary bg-transparent focus:outline-0"
                            />
                            <p className="h-0.5 text-red-500 text-xs">
                                {formError.password}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <input
                                name="confirmPassword"
                                value={formInput.confirmPassword}
                                onChange={(event) => handleInput(event.target.name, event.target.value)}
                                type="password"
                                placeholder="Confirmar contraseña"
                                className="w-full p-2 border-b border-purple-primary bg-transparent focus:outline-0"
                            //Esta de acá es para confirmar la contraseña, creo que no es necesario usar un pattern para validar.
                            />
                            <p className="h-0.5 text-red-500 text-xs">
                                {formError.confirmPassword}
                            </p>
                        </div>
                        <hr className="mt-5" />
                        <button
                            type="submit"
                            className="w-full p-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">
                            Cambiar contraseña
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordPage;
