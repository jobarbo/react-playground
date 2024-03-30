import {FaInstagram} from "react-icons/fa6";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {FaTwitch} from "react-icons/fa6";
import {FaTree} from "react-icons/fa";
import "./styles/Socials.css";

export default function Socials() {
	return (
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
	);
}
