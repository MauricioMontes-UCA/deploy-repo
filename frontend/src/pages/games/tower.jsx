import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Redirect from "../../components/redirect";
import "./tower.css";

const Disco = ({ size, isSelected, onClick }) => (
  <div
    className={`disco ${isSelected ? 'seleccionado' : ''}`}
    style={{
      width: `${size * 40}px`,
      height: "30px",
    }}
    onClick={onClick}
  >
    {size}
  </div>
);

const Poste = ({ discos, index, onClick, discoSeleccionado, setDiscoSeleccionado }) => (
  <div className="poste" onClick={() => onClick(index)}>
    {discos.map((disco, i) => (
      <Disco
        key={i}
        size={disco}
        isSelected={discoSeleccionado === disco}
        onClick={() => setDiscoSeleccionado(disco)} // Selecciona el disco al hacer clic
      />
    ))}
  </div>
);

const TowerGame = () => {
  const [postes, setPostes] = useState([[], [], []]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [movimientos, setMovimientos] = useState(0);
  const [bloques, setBloques] = useState(5);
  const [mensaje, setMensaje] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [intervalo, setIntervalo] = useState(null);
  const [discoSeleccionado, setDiscoSeleccionado] = useState(null);  // Estado para el disco seleccionado

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        document.body.classList.add("small");
      } else {
        document.body.classList.remove("small");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iniciarJuego = () => {
    setPostes([Array.from({ length: bloques }, (_, i) => bloques - i), [], []]);
    setMovimientos(0);
    setSeleccionado(null);
    setMensaje("");
    setJuegoTerminado(false);
    setTiempo(0);

    if (intervalo) {
      clearInterval(intervalo);
    }
    const newIntervalo = setInterval(() => setTiempo((prev) => prev + 1), 1000);
    setIntervalo(newIntervalo);
  };

  const moverDisco = (destino) => {
    if (juegoTerminado) return;

    if (seleccionado === null) {
      if (postes[destino].length === 0) {
        return;
      }
      setSeleccionado(destino);
    } else {
      if (seleccionado === destino) {
        setSeleccionado(null);
        return;
      }

      const discoSeleccionado = postes[seleccionado][postes[seleccionado].length - 1];
      const discoDestino = postes[destino][postes[destino].length - 1];

      if (discoDestino && discoDestino < discoSeleccionado) {
        setMensaje("Movimiento inválido");
        setSeleccionado(null);
        return;
      }

      const nuevosPostes = postes.map((poste, index) =>
        index === seleccionado
          ? poste.slice(0, -1)
          : index === destino
            ? [...poste, discoSeleccionado]
            : poste
      );

      setPostes(nuevosPostes);
      setMovimientos(movimientos + 1);
      setSeleccionado(null);
      setMensaje("");

      if (nuevosPostes[2].length === bloques) {
        setJuegoTerminado(true);
        setMensaje("¡Felicidades! Completaste el juego.");

        if (intervalo) {
          clearInterval(intervalo);
        }
      }
    }
  };

  return (
    <div className="page ">
      <Header>
        <Redirect route={"/dashboard"}>
          <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-bold hover:text-background-white h-full">
            Inicio
          </button>
        </Redirect>
        <Redirect route={"/stats"}>
          <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-bold hover:text-background-white h-full">
            Estadísticas
          </button>
        </Redirect>
        <Redirect route={"/profile"}>
          <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-bold hover:text-background-white h-full">
            Perfil
          </button>
        </Redirect>
      </Header>
      <div className="app-container">
        <div className="text-center w-full max-w-2xl p-8 flex flex-col h-auto items-center justify-center">
          <h1 className="text-3xl font-bold text-background-white" >Torre de Hanoi</h1>
          <p className="mensaje advertencia">Por favor, agranda la ventana para continuar jugando.</p>
          <p className="mensaje">{mensaje}</p>
          <div className="juego">
            {postes.map((poste, index) => (
              <Poste
                key={index}
                discos={poste}
                index={index}
                onClick={moverDisco}
                discoSeleccionado={discoSeleccionado}
                setDiscoSeleccionado={setDiscoSeleccionado}
              />
            ))}
          </div>
          <div className="mt-5 gap-5">
            <label className="text-md">
              Número de bloques:
              <select value={bloques} onChange={(e) => setBloques(Number(e.target.value))}>
                {[3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
            <button 
              onClick={iniciarJuego}
              className="mt-2 py-2 px-4 bg-strong-purple text-white roudned-md text-md cursor-pointer hover:bg-purple-secondary sm:w-full"
                
            >Reiniciar Juego</button>
          </div>
          <p>Movimientos: {movimientos}</p>
          <p>Tiempo: {tiempo}s</p>
          {juegoTerminado && (
            <div className="w-2/3 flex gap-5">
              <h3>Resultados</h3>
              <p>Tiempo: {tiempo}s</p>
              <p>Movimientos: {movimientos}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TowerGame;
