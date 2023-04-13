// import Board from "./pages/Board";
import { useEffect, useState } from "react";
import cardsArray from "./datas/cardsArray";
import Card from "./components/Card";

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const shuffleCards = () => {
		const shuffledCards = [...cardsArray, ...cardsArray]
			.sort(() => Math.random() - 0.5)
			.map((card, index) => ({ ...card, id: index }));

		setCards(shuffledCards);
		setTurns(0);
	};

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.imageFront === choiceTwo.imageFront) {
				console.log("well done");
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.imageFront === choiceOne.imageFront) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				console.log("nope");
				setTimeout(() => {
					resetTurn();
				}, 1000);
			}
		}
	}, [choiceOne, choiceTwo]);

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	// console.log(cards, turns);

	console.log(cards);

	return (
		<div className="App">
			<h1>POKEMIND</h1>
			<button onClick={shuffleCards}>NEW GAME</button>

			<section className="card-grid">
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</section>
		</div>
	);
};

export default App;

