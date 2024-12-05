import React, { useEffect } from 'react';
import Header from '../header';
import Redirect from '../redirect';
import { useNavigate } from 'react-router-dom'; 
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const navigate = useNavigate();
  const results = JSON.parse(localStorage.getItem('gameResults')) || [];

  if (results.length === 0) {
    return <p>No hay datos aún.</p>;
  }

  const times = results.map((result) => result.time);
  const moves = results.map((result) => result.moves);
  const efficiencies = results.map((result) => result.efficiency);
  const labels = results.map((_, index) => `Juego ${index + 1}`);

  const data = {
    labels,
    datasets: [
      {
        label: 'Tiempo (segundos)',
        data: times,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Movimientos',
        data: moves,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Eficiencia (Parejas / Movimientos)',
        data: efficiencies,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        bodyColor: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
    responsive: true,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
        <Header>
        <Redirect route={"/dashboard"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Inicio
                    </button>
                </Redirect>
                <Redirect route={"/stats"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Estadísticas
                    </button>
                </Redirect>
                <Redirect route={"/profile"}>
                    <button className="btn pl-2 pr-2 bg-transparent text-purple-primary font-medium hover:text-background-white h-full">
                        Perfil
                    </button>
                </Redirect>
        </Header>
        <div className="flex w-3/4 items-center mx-auto overflow-y-auto h-full my-10 p-5 bg-light-purple rounded-lg shadow-lg">
          <div className="w-full max-w-1200 mx-auto overflow-y-auto h-full p-5 box-border" >
            <h2 className='text-purple-primary font-bold text-xl text-center'>Estadísticas de Juegos</h2>
            <div className='bg-light-purple rounded '>
              <Bar data={data} options={options} width={800} height={400} />
            </div>
            {results.map((result, index) => (
              <div key={index}>
                <p >Juego {index + 1}:</p>
                <ul className="mt-2 p-5">
                  <li className='mt-2'>Tiempo: {result.time}s</li>
                  <li className='mt-2'>Movimientos: {result.moves}</li>
                  <li className='mt-10'>Eficiencia: {result.efficiency}</li>
                  <li className='mt-10'>Dificultad: {result.difficulty}</li>
                </ul>
              </div>
            ))}
            <button 
              className="p-2 font-md font-bold text-white bg-custom-black rounded cursor-pointer transition-colors duration-300 ease-in-out mt-[20px] mx-auto"
              onClick={() => navigate('/dashboard')}>Volver al Juego</button>
          </div>
        </div>
    </div>
  );
};

export default Statistics;
