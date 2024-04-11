import React, {useState} from "react";
import "./styles/Grid.css";

const gallery = Object.values(import.meta.glob("../assets/kodadot/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {eager: true, as: "url"}));

function Grid() {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleClick = (image) => {
		setSelectedImage(image);
		// Add class to app__overlay to show the overlay
		document.querySelector(".app__overlay").classList.add("app__overlay--show");
		document.body.classList.add("scroll-lock");
	};

	const handleClose = () => {
		// Remove class from app__overlay to hide the overlay
		document.querySelector(".app__overlay").classList.remove("app__overlay--show");
		document.body.classList.remove("scroll-lock");
		// add a delay to remove the selected image
		setTimeout(() => {
			setSelectedImage(null);
		}, 500);
	};

	return (
		<>
			<div className='app__grid'>
				{gallery.map((image, index) => (
					<div className='app__grid-item' key={index} onClick={() => handleClick(image)}>
						<p className='app__grid-index'>{index}</p>
						<img src={image} alt={`VOIDWARDEN ${index}`} className='grid__image' />
					</div>
				))}
			</div>
			<div className='app__overlay'>
				<div className='app__overlay-content'>
					<img src={selectedImage} alt='Selected Image' className='app__overlay-image' />
				</div>
				<span className='app__overlay-close' onClick={handleClose}>
					Close the image
				</span>
			</div>
		</>
	);
}

export default Grid;
