import { useState } from "react";

const Card = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<article className="card">
			<div className={flipped ? "flipped" : ""}>
				<img src={card.imageFront} alt="pokeball" className="front" />

				<img
					src={card.imageBack}
					alt={card.pokeName}
					className="back"
					onClick={handleClick}
				/>
			</div>
		</article>
	);
};

export default Card;

