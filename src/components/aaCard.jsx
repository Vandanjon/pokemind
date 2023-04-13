import classnames from "classnames";
import pokeball from "./assets/pokeball.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
	const handleClick = () => {
		!isFlipped && !isDisabled && onClick(index);
	};

	return (
		<div
			className={classnames("card", {
				"is-flipped": isFlipped,
				"is-inactive": isInactive,
			})}
			onClick={handleClick}
		>
			<div className="card-face card-font-face">
				<img src={pokeball} alt="pokeball" />
			</div>
			<div className="card-face card-back-face">
				<img src={card.image} alt="pokeball" />
			</div>
		</div>
	);
};

export default Card;































import { useState } from "react";
// import shuffleCards from "./utils/shuffleAlgo";

function swap(array, i, j) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function shuffleCards(array) {
	const length = array.length;
	for (let i = length; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * i);
		const currentIndex = i - 1;
		swap(array, currIndex, randomIndex);
	}
	return array;
}

const App = () => {
	const [cards, setCards] = useState(() =>
		shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
	);

	const handleCardClick = (index) => {
		// We will handle it later
	};

	return (
		<div id="AppContainer">
			<header>
				<h3>Play the Flip card game</h3>
				<div>
					Select two cards with same content consequtively to make them vanish
				</div>
			</header>
			<div className="container">
				{cards.map((card, index) => {
					return (
						<Card
							key={index}
							card={card}
							index={index}
							onClick={handleCardClick}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;

