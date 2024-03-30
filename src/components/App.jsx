import "./styles/App.css";
import Card from "./Card";
import profileImage from "../assets/pfp.png";

let name = "JBarbeau.art";
let description =
	"Jonathan Barbeau (b. 1989, Montreal) is an international artist making generative art since 2017. He develops custom systems and algorithms for creating visually striking art, blending logic and chaos. His work is exhibited and collected globally.";

function App() {
	return (
		<>
			<div className='app'>
				<Card title={name} description={description} pfp={profileImage} />
			</div>
		</>
	);
}

export default App;
