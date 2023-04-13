import cardsArray from "../datas/cardsArray";
import shuffleCards from "../utils/shuffleCards";
import Card from "../components/Card";
import { useState } from "react";
import pikachu from "../assets/pikachu.png";

const Board = () => {
	// const totalArray = [...cardsArray, ...cardsArray];

	// const [cards, setCards] = useState(totalArray);
	// console.log(totalArray);
	// const [openCard, setOpenCard] = useState(false);

	// function handleClick(index) {
	// 	console.log(index);
	// }

	return (
		<div id="BoardContainer">
			<h1>Trouve les POKEPIOUS !</h1>
			<img src={pikachu} alt="" />

			{/* <section id="CardsContainer">
				{cards.map((card, index) => (
					<Card key={index} onClick={handleClick} index={index} card={card} />
				))}
			</section> */}
		</div>
	);
};

export default Board;

