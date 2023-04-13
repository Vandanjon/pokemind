import pokeball from "../assets/pokeball.png";

const Card = ({ pokeName, image, onClick, index }) => {
	return (
		<article className="card" onClick={() => onClick(index)}>
			<div className="front-face">
				<img src={image} alt={pokeName} />
			</div>
			<div className="back-face">
				<img src={pokeball} alt="pokeball" />
			</div>
		</article>
	);
};

export default Card;
