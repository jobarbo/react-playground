import {FaInstagram} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {FaTwitch} from "react-icons/fa6";
import {FaTree} from "react-icons/fa";

console.log(FaInstagram);
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
			<div className='card__socials-wrapper'>
				<ul className='card__socials-list'>
					<li className='card__socials-item'>
						<a className='card__socials-link' href='#' target='_blank' rel='noreferrer'>
							<FaEnvelope />
						</a>
					</li>
					<li className='card__socials-item'>
						<a className='card__socials-link' href='#' target='_blank' rel='noreferrer'>
							<FaInstagram />
						</a>
					</li>
					<li className='card__socials-item'>
						<a className='card__socials-link' href='#' target='_blank' rel='noreferrer'>
							<FaSquareXTwitter />
						</a>
					</li>

					<li className='card__socials-item'>
						<a className='card__socials-link' href='#' target='_blank' rel='noreferrer'>
							<FaTwitch />
						</a>
					</li>
					<li className='card__socials-item'>
						<a className='card__socials-link' href='#' target='_blank' rel='noreferrer'>
							<FaTree />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
