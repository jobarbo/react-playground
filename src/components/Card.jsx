import Socials from "./Socials";
import "./styles/Card.css";
import Image from "./Image";
export default function Card(props) {
	console.log(props);
	return (
		<section className='card'>
			<Image pfp={props.pfp} />
			<div className='card__content-wrapper'>
				<h2 className='card__content-title'>{props.title}</h2>
				<h4 className='card__content-subtitle'>Generative Artist based in Québec City</h4>
				<p className='card__content-description'>{props.description}</p>
			</div>
			<Socials />
		</section>
	);
}
