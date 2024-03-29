import {REACT_APP_GOOGLE_MAPS_API_KEY} from "../constants/constants";
import "./styles/Header.css";
function Header() {
	return (
		<header className='header'>
			<h1 className='header__title'>Jbarbeau.art</h1>
			<nav className='header__navigation'>
				<ul className='header__navigation--list'>
					<li className='header__navigation--list-item'>
						<a className='header__navigation--link' href='#'>
							Home
						</a>
					</li>
					<li className='header__navigation--list-item'>
						<a className='header__navigation--link' href='#'>
							Shop
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
