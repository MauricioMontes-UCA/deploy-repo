import React, { useState, useEffect } from 'react';
import Card from '../../components/Gamemoria/Card';
import shuffle from 'lodash/shuffle';
import DifficultySelector from '../../components/Gamemoria/DifficultySelector';
import Header from '../../components/header';
import Redirect from '../../components/redirect';

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
        <div className="h-screen flex flex-col items-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
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
            <div className="flex w-3/4 items-center mx-auto overflow-y-auto h-full my-10 p-5 bg-light-purple rounded-lg shadow-lg">
                <div className="w-full max-w-1200 mx-auto overflow-y-auto h-full p-5 box-border" >

                    { }
                    <DifficultySelector setDifficulty={setDifficulty} />
                    <div className="grid grid-cols-4 gap-2.5 justify-center w-4/5 mx-auto my-3">
                        {cards.map((card, index) => (
                            <Card key={index} card={card} onClick={() => handleFlipCard(index)} />
                        ))}
                    </div>
                    <div>
                        <p className="text-purple-primary text-center font-bold">Tiempo: {getElapsedTime()}s</p>
                        <p className='text-purple-primary text-center font-bold'>Movimientos: {moves}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MemoryGame;
