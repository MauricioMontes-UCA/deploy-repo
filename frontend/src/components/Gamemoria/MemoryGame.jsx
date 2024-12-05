import React, { useState, useEffect } from 'react';
import Card from './Card';
import shuffle from 'lodash/shuffle';
import DifficultySelector from './DifficultySelector';

const MemoryGame = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const images = [
    '/src/assets/ast.jpeg',
    '/src/assets/flow.jpeg',
    '/src/assets/horse.jpeg',
    '/src/assets/circlee.jpeg',
    '/src/assets/bee.jpeg',
    '/src/assets/duck.jpeg',
    '/src/assets/koko.jpeg',
    '/src/assets/rat.jpeg',
  ];

  const difficultyLevels = { easy: 4, medium: 6, hard: 8 };

  useEffect(() => {
    startGame();
  }, [difficulty]);

  const startGame = () => {
    const numPairs = difficultyLevels[difficulty];
    const selectedImages = shuffle(images).slice(0, numPairs);
    const gameCards = shuffle([...selectedImages, ...selectedImages]).map(
      (image, index) => ({
        id: index,
        image,
        flipped: false,
      })
    );
    setCards(gameCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleFlipCard = (index) => {
    if (
      flippedCards.length === 2 ||
      cards[index].flipped ||
      matchedCards.includes(cards[index].image)
    )
      return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      const firstIndex = flippedCards[0];
      if (cards[firstIndex].image === cards[index].image) {
        setMatchedCards([...matchedCards, cards[firstIndex].image]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          newCards[firstIndex].flipped = false;
          newCards[index].flipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && cards.length > 0) {
      setEndTime(Date.now());
      const result = {
        time: ((Date.now() - startTime) / 1000).toFixed(1),
        moves,
        efficiency: (matchedCards.length / moves).toFixed(2),
        difficulty,
      };
      const previousResults =
        JSON.parse(localStorage.getItem('gameResults')) || [];
      localStorage.setItem(
        'gameResults',
        JSON.stringify([...previousResults, result])
      );
    }
  }, [matchedCards]);

  const getElapsedTime = () => {
    return endTime ? ((endTime - startTime) / 1000).toFixed(1) : 0;
  };

  return (
    <div className="memory-game">

      {}
      <DifficultySelector setDifficulty={setDifficulty} />
      <div className="game-board">
        {cards.map((card, index) => (
          <Card key={index} card={card} onClick={() => handleFlipCard(index)} />
        ))}
      </div>
      <div className="stats">
        <p>Tiempo: {getElapsedTime()}s</p>
        <p>Movimientos: {moves}</p>
      </div>
    </div>
  );
};

export default MemoryGame;
