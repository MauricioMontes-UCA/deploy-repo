import { color } from 'chart.js/helpers';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DifficultySelector = ({ setDifficulty }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '20px',
      marginBottom: '50px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#5139d6',
    },
    select: {
      padding: '6px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      color: '#333',
      cursor: 'pointer',
    },
    button: {
      padding: '8px 12px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#201c22',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease', // Agregar transición para color de texto
    },
    buttonHover: {
      backgroundColor: '#d4abdc',
      color: 'black', // Cambiar color del texto a negro
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.title}>Seleccione Dificultad:</span>
      <select
        style={styles.select}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Fácil</option>
        <option value="medium">Intermedio</option>
        <option value="hard">Difícil</option>
      </select>
      <button
        className="p-2 font-md font-bold text-white bg-custom-black rounded cursor-pointer transition-colors duration-300 ease-in-out mt-[20px] mx-auto"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
          e.target.style.color = styles.buttonHover.color; 
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = styles.button.backgroundColor;
          e.target.style.color = styles.button.color; 
        }}
        onClick={() => navigate('/stats')}
      >
        Ver Estadísticas
      </button>
    </div>
  );
};

export default DifficultySelector;
