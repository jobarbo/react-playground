export default function Image(props) {
	console.log(props);
	return (
		<div className='card__image-wrapper'>
			<img className='card__image' src={props.pfp} alt='Profile image' />
			<span className='card__image-shadow'></span>
		</div>
	);
}
