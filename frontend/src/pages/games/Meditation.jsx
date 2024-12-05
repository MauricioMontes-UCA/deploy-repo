import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Meditation.css";

const Meditation = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/dashboard");
    }

    useEffect(() => {
        const startTime = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
        };

        startTime();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);

    return (
        <div onClick={handleRedirect} className="bg-gradient-to-t static from-purple-primary to-custom-black flex flex-col items-center justify-center min-h-screen p-30">
            <div className="fade-text">
                <p className="text1">Respira y exhala siguiendo el ritmo</p>
                <p className="text2">Para salir, solo presiona click</p>
            </div>

            <div className="outer-circle">
                <div className="inner-circle"></div>
            </div>

            <p className="fixed top-0 right-0 font-bold text-white">Tiempo: {time}s</p>
        </div>
    );
}

export default Meditation;