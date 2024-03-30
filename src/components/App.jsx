import "./styles/App.css";
import Header from "./Header";

let name = "JBarbeau.art";
let description =
	"Jonathan Barbeau (b. 1989, Montreal) is an international artist making generative art since 2017. He develops custom systems and algorithms for creating visually striking art, blending logic and chaos. His work is exhibited and collected globally.";

function App() {
	return (
		<>
			<Header />
			<div className='app'>
				<h1 className='app__title'>{name}</h1>
				<p className='app__text'>{description}</p>
			</div>
		</>
	);
}

export default App;
