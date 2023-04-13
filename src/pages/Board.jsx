import cardsArray from "../datas/cardsArray";
import shuffleCards from "../utils/shuffleCards";
import Card from "../components/Card";
import { useState } from "react";

const Board = () => {
	const totalArray = [...cardsArray, ...cardsArray];

	const [cards, setCards] = useState(totalArray);
	console.log(totalArray);
	const [openCard, setOpenCard] = useState(false);

	function handleClick(index) {
		console.log(index);
	}

	return (
		<div id="BoardContainer">
			<h1>Trouve les POKEPIOUS !</h1>

			<section id="CardsContainer">
				{cards.map((card, index) => (
					<Card
						key={index}
						pokeName={card.pokeName}
						image={card.image}
						onClick={handleClick}
						index={index}
					/>
				))}
			</section>
		</div>
	);
};

export default Board;
