import pokeball from "../assets/pokeball.png";

const Card = ({ pokeName, image, onClick, index }) => {
	return (
		// <article className="flip-card" onClick={() => onClick(index)}>
		<article className="flip-card">
			<div className="flip-card-inner">
				<div className="front-face">
					<img src={image} alt={pokeName} />
				</div>

				<div className="back-face">
					<img src={pokeball} alt="pokeball" />
				</div>
			</div>
		</article>
	);
};

export default Card;

