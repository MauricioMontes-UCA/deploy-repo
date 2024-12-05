import React from "react";
import CtaSection from "../components/cta";
import Header from "../components/header";
import Benefits from "../components/BenefitSection";
import Redirect from "../components/redirect";

const LandingPage = () => {

    return (
        <div className="flex flex-col h-screen">
            <Header redirect={false}>
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
            <CtaSection />
        </div>
    );
};

export default LandingPage;